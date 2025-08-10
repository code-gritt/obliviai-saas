"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconMessage,
  IconPlayerStopFilled,
  IconPlus,
  IconX,
  IconMaximize,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useChat } from "ai/react";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

// Simple debounce
const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const Bubble = () => {
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messageHistoryRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isUserScrolledUp, setIsUserScrolledUp] = useState(false);

  const debouncedHandleSubmit = debounce((e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(e);
  }, 500);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    isLoading,
    stop,
    setMessages,
  } = useChat({
    api: "/api/chat",
    keepLastMessageOnError: true,
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (messageHistoryRef.current) {
        const atBottom =
          messageHistoryRef.current.scrollHeight -
            messageHistoryRef.current.scrollTop ===
          messageHistoryRef.current.clientHeight;
        setIsUserScrolledUp(!atBottom);
      }
    };
    messageHistoryRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      messageHistoryRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isUserScrolledUp && messages.length) scrollToBottom();
  }, [messages, isUserScrolledUp]);

  const scrollIntoView = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollButton(false);
    setIsUserScrolledUp(false);
  };

  const handleBlockClick = (content: string) => {
    append({ role: "user", content });
    debouncedHandleSubmit(new Event("submit") as any);
  };

  const blocks = [
    {
      icon: <IconMessage className="h-6 w-6 text-blue-500" />,
      title: "General",
      content: "Tell me about AI advancements",
    },
    {
      icon: <IconMessage className="h-6 w-6 text-green-500" />,
      title: "Tech Help",
      content: "How to debug a React app",
    },
    {
      icon: <IconMessage className="h-6 w-6 text-purple-500" />,
      title: "Fun Fact",
      content: "Tell me a fun fact about space",
    },
  ];

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-20 right-10 z-[999] w-[90vw] max-w-md h-[70vh] bg-gray-100 rounded-lg shadow-lg flex flex-col overflow-hidden"
            )}
          >
            {/* Header */}
            <div className="h-10 w-full bg-gradient-to-l from-black via-gray-700 to-black flex justify-between px-6 py-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hover:bg-gray-800 p-1 rounded-full"
              >
                <IconMaximize className="h-4 w-4 text-white" />
              </button>
              {messages.length > 0 && (
                <button
                  className="rounded-full bg-black text-white px-2 py-0.5 text-sm flex items-center gap-1"
                  onClick={() => setMessages([])}
                >
                  <IconPlus className="h-4 w-4" /> New
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:bg-gray-800 rounded-full p-1"
              >
                <IconX className="h-4 w-4" />
              </button>
            </div>

            {/* Suggestion Blocks */}
            {!messages.length && (
              <div className="px-5 py-4 grid grid-cols-1 md:grid-cols-2 gap-2 overflow-y-auto">
                {blocks.map((block, index) => (
                  <motion.button
                    key={block.title}
                    onClick={() => handleBlockClick(block.content)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 flex flex-col justify-between rounded-2xl h-32 bg-white shadow"
                  >
                    {block.icon}
                    <div>
                      <div className="text-base font-bold">{block.title}</div>
                      <div className="text-xs text-gray-500">
                        {block.content}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}

            {/* Messages */}
            <div
              ref={messageHistoryRef}
              className="p-2 flex flex-1 overflow-y-auto"
            >
              <div className="flex flex-1 flex-col">
                {messages.map((m, i) => (
                  <div key={i}>
                    {m.role === "user" ? (
                      <UserMessage content={m.content} />
                    ) : (
                      <AIMessage content={m.content || "No response"} />
                    )}
                  </div>
                ))}
                <div className="pb-10" ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={debouncedHandleSubmit}
              className="py-1 px-5 relative"
            >
              {showScrollButton && (
                <button
                  onClick={scrollIntoView}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
                >
                  <IconArrowNarrowDown className="h-5 w-5" />
                </button>
              )}
              <textarea
                ref={inputRef}
                disabled={isLoading}
                className="px-4 w-full pr-10 rounded-lg border py-[1rem] bg-white text-gray-800 text-sm focus:outline-none"
                placeholder="Type a message..."
                value={input}
                onChange={handleInputChange}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    debouncedHandleSubmit(event);
                  }
                }}
                rows={1}
              />
              {isLoading ? (
                <button
                  onClick={stop}
                  className="absolute top-1/2 right-8 -translate-y-1/2 bg-red-500 h-8 w-8 rounded-full flex items-center justify-center"
                >
                  <IconPlayerStopFilled className="h-5 w-5 text-white" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="absolute top-1/2 right-8 -translate-y-1/2 bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center"
                >
                  <IconArrowNarrowUp className="h-5 w-5 text-neutral-500" />
                </button>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button (always clickable) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-10 right-10 h-14 w-14 z-[1000] bg-white flex items-center justify-center rounded-full shadow-lg transition duration-200"
      >
        <IconMessage className="h-6 w-6 text-neutral-600 group-hover:text-black" />
      </button>
    </>
  );
};

const UserMessage = ({ content }: { content: string }) => (
  <div className="p-2 flex justify-end">
    <div className="text-sm px-4 py-2 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 text-white">
      {content}
    </div>
  </div>
);

const AIMessage = ({ content }: { content: string }) => (
  <div className="p-2 flex gap-2">
    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-violet-600"></div>
    <div className="text-sm px-2 py-2 rounded-lg bg-white shadow text-black">
      <Markdown>{content}</Markdown>
    </div>
  </div>
);
