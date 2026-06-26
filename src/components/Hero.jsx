import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown, Search, Bell, Home, CheckSquare, ArrowRightLeft, CreditCard, PieChart, Users, Settings, Plus, MoreVertical, Send, ArrowDownLeft, ReceiptText, FileText } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center w-full flex-1 overflow-hidden pt-8 md:pt-12">
      <div className="relative z-10 flex flex-col items-center w-full px-6 text-center">
        {/* 1. Badge */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body mb-6"
        >
          Now with GPT-5 support ✨
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground"
        >
          The Future of <span className="font-display italic">Smarter</span><br />Automation
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
        >
          Automate your busywork with intelligent agents that learn, adapt, and<br className="hidden md:block" />
          execute—so your team can focus on what matters most.
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center gap-4"
        >
          <Button className="rounded-full px-6 py-6 text-sm font-semibold font-body bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90 shadow-md">
            Book a demo
          </Button>
          <Button variant="ghost" className="h-12 w-12 rounded-full border border-border bg-background shadow-md hover:bg-background/80 p-0 flex items-center justify-center">
            <Play className="h-4 w-4 fill-foreground" />
          </Button>
        </motion.div>

        {/* 5. Dashboard Preview */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 w-full max-w-[1100px]"
        >
          <div
            className="rounded-2xl overflow-hidden p-3 md:p-4 w-full flex"
            style={{
              background: 'rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: 'var(--shadow-dashboard)',
            }}
          >
            {/* Dashboard Inner Container */}
            <div className="w-full bg-background rounded-xl flex flex-col font-body text-[11px] select-none pointer-events-none border border-border shadow-sm">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background rounded-t-xl">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#6366F1] text-white rounded flex items-center justify-center font-bold text-xs">N</div>
                  <span className="font-semibold text-foreground text-xs">Nexora</span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </div>
                
                <div className="flex-1 max-w-md mx-8 flex items-center bg-secondary/50 rounded-md px-3 py-1.5 border border-border">
                  <Search className="w-3.5 h-3.5 text-muted-foreground mr-2" />
                  <span className="text-muted-foreground flex-1 text-left">Search or jump to...</span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground bg-background border border-border rounded px-1.5 py-0.5 font-medium">
                    <span>⌘</span><span>K</span>
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-foreground font-medium cursor-pointer">
                    Move Money <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <Bell className="w-4 h-4 text-foreground" />
                  <div className="w-6 h-6 rounded-full bg-[#1A1F2C] text-white font-semibold flex items-center justify-center text-[10px]">JB</div>
                </div>
              </div>

              {/* Body */}
              <div className="flex w-full">
                {/* Sidebar */}
                <div className="w-44 border-r border-border bg-[#F8FAFC] flex flex-col py-4">
                  <div className="px-3 flex flex-col gap-1">
                    <div className="flex items-center gap-2 px-2 py-1.5 bg-white shadow-sm border border-border rounded-md text-foreground font-medium">
                      <Home className="w-3.5 h-3.5" /> Home
                    </div>
                    <div className="flex items-center justify-between px-2 py-1.5 text-muted-foreground">
                      <div className="flex items-center gap-2"><CheckSquare className="w-3.5 h-3.5" /> Tasks</div>
                      <span className="bg-background border border-border text-foreground rounded-full px-1.5 py-[1px] text-[8px] font-bold">10</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground"><ArrowRightLeft className="w-3.5 h-3.5" /> Transactions</div>
                    <div className="flex items-center justify-between px-2 py-1.5 text-muted-foreground">
                      <div className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5" /> Payments</div>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground"><CreditCard className="w-3.5 h-3.5" /> Cards</div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground"><PieChart className="w-3.5 h-3.5" /> Capital</div>
                    <div className="flex items-center justify-between px-2 py-1.5 text-muted-foreground">
                      <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Accounts</div>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="mt-6 px-3">
                    <span className="px-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-2 block text-left">Workflows</span>
                    <div className="flex flex-col gap-1 text-muted-foreground text-left">
                      <div className="flex items-center gap-2 px-2 py-1.5"><ArrowRightLeft className="w-3.5 h-3.5" /> Trade routes</div>
                      <div className="flex items-center gap-2 px-2 py-1.5"><CreditCard className="w-3.5 h-3.5" /> Payments</div>
                      <div className="flex items-center gap-2 px-2 py-1.5"><Bell className="w-3.5 h-3.5" /> Notifications</div>
                      <div className="flex items-center gap-2 px-2 py-1.5"><Settings className="w-3.5 h-3.5" /> Settings</div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white p-6 flex flex-col gap-6 text-left border-l border-white/50">
                  <h2 className="text-sm font-semibold text-foreground">Welcome, Jane</h2>
                  
                  {/* Actions Row */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium bg-[#6366F1] text-white shadow-sm">
                      <Send className="w-3 h-3" /> Send
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium bg-background border border-border text-foreground">
                      <ArrowDownLeft className="w-3 h-3" /> Request
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium bg-background border border-border text-foreground">
                      <ArrowRightLeft className="w-3 h-3" /> Transfer
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium bg-background border border-border text-foreground">
                      <Plus className="w-3 h-3" /> Deposit
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium bg-background border border-border text-foreground">
                      <ReceiptText className="w-3 h-3" /> Pay Bill
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium bg-background border border-border text-foreground">
                      <FileText className="w-3 h-3" /> Create Invoice
                    </div>
                    <span className="text-muted-foreground ml-auto hover:underline cursor-pointer">Customize</span>
                  </div>

                  {/* Cards Row */}
                  <div className="flex gap-6 w-full">
                    
                    {/* Balance Card */}
                    <div className="flex-1 basis-0 bg-background border border-border shadow-sm rounded-xl p-5 flex flex-col">
                      <div className="flex items-center gap-1.5 text-foreground font-semibold mb-1">
                        Mercury Balance <span className="bg-[#6366F1] text-white rounded-full w-3.5 h-3.5 flex items-center justify-center text-[8px]">✓</span>
                      </div>
                      <div className="text-[28px] font-semibold text-foreground mb-3">
                        $8,450,190.<span className="text-sm font-medium text-muted-foreground">32</span>
                      </div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-muted-foreground text-[10px]">Last 30 Days</span>
                        <span className="text-green-500 font-medium text-[10px] flex items-center gap-0.5">↗ +$1.8M</span>
                        <span className="text-red-500 font-medium text-[10px] flex items-center gap-0.5">↘ -$900K</span>
                      </div>
                      {/* Custom SVG Chart */}
                      <div className="h-24 w-full mt-auto relative">
                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,40 L0,30 C15,30 20,25 35,28 C50,32 60,15 75,20 C90,25 95,10 100,5 L100,40 Z" fill="url(#chartGradient)" />
                          <path d="M0,30 C15,30 20,25 35,28 C50,32 60,15 75,20 C90,25 95,10 100,5" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Accounts Card */}
                    <div className="flex-1 basis-0 bg-background border border-border shadow-sm rounded-xl p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-semibold text-foreground">Accounts</span>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Plus className="w-4 h-4" />
                          <MoreVertical className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-center py-4 border-b border-border/60 text-xs">
                          <span className="text-foreground font-medium">Credit</span>
                          <span className="text-foreground font-semibold">$98,125.50</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-border/60 text-xs">
                          <span className="text-foreground font-medium">Treasury</span>
                          <span className="text-foreground font-semibold">$6,750,200.00</span>
                        </div>
                        <div className="flex justify-between items-center py-4 text-xs">
                          <span className="text-foreground font-medium">Operations</span>
                          <span className="text-foreground font-semibold">$1,592,864.82</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Transactions Table */}
                  <div className="w-full mt-2">
                    <h3 className="font-semibold text-foreground mb-4">Recent Transactions</h3>
                    <table className="w-full text-left border-collapse text-[11px]">
                      <thead>
                        <tr className="text-muted-foreground border-b border-border">
                          <th className="pb-3 font-medium w-1/4">Date</th>
                          <th className="pb-3 font-medium w-2/4">Description</th>
                          <th className="pb-3 font-medium w-1/4 text-right">Amount</th>
                          <th className="pb-3 font-medium w-1/4 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-foreground">
                        <tr className="border-b border-border/40">
                          <td className="py-3 text-muted-foreground">Oct 26, 2023</td>
                          <td className="py-3 font-medium">AWS</td>
                          <td className="py-3 text-right">-$5,200.00</td>
                          <td className="py-3 text-right">
                            <span className="inline-flex items-center gap-1.5 text-amber-500 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pending
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-border/40">
                          <td className="py-3 text-muted-foreground">Oct 25, 2023</td>
                          <td className="py-3 font-medium">Client Payment</td>
                          <td className="py-3 text-right text-green-600 font-medium">+$125,000.00</td>
                          <td className="py-3 text-right">
                            <span className="inline-flex items-center gap-1.5 text-green-600 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-border/40">
                          <td className="py-3 text-muted-foreground">Oct 24, 2023</td>
                          <td className="py-3 font-medium">Payroll</td>
                          <td className="py-3 text-right">-$85,450.00</td>
                          <td className="py-3 text-right">
                            <span className="inline-flex items-center gap-1.5 text-green-600 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 text-muted-foreground">Oct 22, 2023</td>
                          <td className="py-3 font-medium">Office Supplies</td>
                          <td className="py-3 text-right">-$1,200.00</td>
                          <td className="py-3 text-right">
                            <span className="inline-flex items-center gap-1.5 text-green-600 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> Completed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
