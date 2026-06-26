import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown, Search, Bell, Home, CheckSquare, ArrowRightLeft, CreditCard, PieChart, Users, Settings, Plus, MoreVertical } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center w-full flex-1 overflow-hidden pt-12 md:pt-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4"
      />

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
          className="font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-xl"
        >
          The Future of <span className="font-display italic">Smarter</span> Automation
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
        >
          Automate your busywork with intelligent agents that learn, adapt, and execute—so your team can focus on what matters most.
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 flex items-center gap-3"
        >
          <Button className="rounded-full px-6 py-5 text-sm font-medium font-body">
            Book a demo
          </Button>
          <Button variant="ghost" className="h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80 p-0 flex items-center justify-center">
            <Play className="h-4 w-4 fill-foreground" />
          </Button>
        </motion.div>

        {/* 5. Dashboard Preview */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 w-full max-w-5xl"
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
            <div className="w-full bg-background rounded-xl overflow-hidden flex flex-col font-body text-[11px] select-none pointer-events-none border border-border shadow-sm h-[600px]">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded flex items-center justify-center font-bold text-xs">N</div>
                  <span className="font-semibold text-foreground text-xs">Nexora</span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </div>
                
                <div className="flex-1 max-w-md mx-8 flex items-center bg-secondary/50 rounded-md px-3 py-1.5 border border-border">
                  <Search className="w-3.5 h-3.5 text-muted-foreground mr-2" />
                  <span className="text-muted-foreground flex-1">Search...</span>
                  <span className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5 bg-background">⌘K</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="bg-primary text-primary-foreground px-3 py-1.5 rounded text-[10px] font-medium">Move Money</button>
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent font-semibold flex items-center justify-center text-[10px]">JB</div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-40 border-r border-border bg-background flex flex-col py-3">
                  <div className="px-3 flex flex-col gap-1">
                    <div className="flex items-center gap-2 px-2 py-1.5 bg-secondary rounded-md text-foreground font-medium">
                      <Home className="w-3.5 h-3.5" /> Home
                    </div>
                    <div className="flex items-center justify-between px-2 py-1.5 text-muted-foreground">
                      <div className="flex items-center gap-2"><CheckSquare className="w-3.5 h-3.5" /> Tasks</div>
                      <span className="bg-accent text-accent-foreground rounded-full px-1.5 py-0.5 text-[8px] font-bold">10</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground"><ArrowRightLeft className="w-3.5 h-3.5" /> Transactions</div>
                    <div className="flex items-center justify-between px-2 py-1.5 text-muted-foreground">
                      <div className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5" /> Payments</div>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground"><PieChart className="w-3.5 h-3.5" /> Capital</div>
                    <div className="flex items-center justify-between px-2 py-1.5 text-muted-foreground">
                      <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Accounts</div>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="mt-6 px-3">
                    <span className="px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Workflows</span>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                      <div className="px-2 py-1.5">Trade routes</div>
                      <div className="px-2 py-1.5">Payments</div>
                      <div className="px-2 py-1.5">Notifications</div>
                      <div className="flex items-center gap-2 px-2 py-1.5"><Settings className="w-3.5 h-3.5" /> Settings</div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-secondary/30 p-6 flex flex-col gap-6 overflow-y-auto text-left">
                  <h2 className="text-sm font-semibold text-foreground">Welcome, Jane</h2>
                  
                  {/* Actions Row */}
                  <div className="flex items-center gap-2">
                    {['Send', 'Request', 'Transfer', 'Deposit', 'Pay Bill', 'Create Invoice'].map((action, i) => (
                      <div key={action} className={`px-4 py-1.5 rounded-full text-[10px] font-medium ${i === 0 ? 'bg-accent text-accent-foreground' : 'bg-background border border-border text-foreground'}`}>
                        {action}
                      </div>
                    ))}
                    <span className="text-muted-foreground ml-auto hover:underline cursor-pointer">Customize</span>
                  </div>

                  {/* Cards Row */}
                  <div className="flex gap-4 w-full">
                    
                    {/* Balance Card */}
                    <div className="flex-1 basis-0 bg-background border border-border rounded-xl p-4 flex flex-col">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        Mercury Balance <span className="bg-green-100 text-green-700 rounded-full w-3 h-3 flex items-center justify-center text-[8px]">✓</span>
                      </div>
                      <div className="text-2xl font-semibold text-foreground mb-4">
                        $8,450,190.<span className="text-xs text-muted-foreground">32</span>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-muted-foreground">Last 30 Days</span>
                        <span className="text-green-500 font-medium">+$1.8M</span>
                        <span className="text-red-500 font-medium">-$900K</span>
                      </div>
                      {/* Custom SVG Chart */}
                      <div className="h-20 w-full mt-auto relative">
                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,40 L0,20 C15,20 20,10 35,15 C50,20 60,5 75,10 C90,15 95,25 100,20 L100,40 Z" fill="url(#chartGradient)" />
                          <path d="M0,20 C15,20 20,10 35,15 C50,20 60,5 75,10 C90,15 95,25 100,20" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Accounts Card */}
                    <div className="flex-1 basis-0 bg-background border border-border rounded-xl p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-foreground">Accounts</span>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Plus className="w-3.5 h-3.5" />
                          <MoreVertical className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-center py-3">
                          <span className="text-foreground font-medium">Credit</span>
                          <span className="text-muted-foreground">$98,125.50</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-foreground font-medium">Treasury</span>
                          <span className="text-muted-foreground">$6,750,200.00</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-foreground font-medium">Operations</span>
                          <span className="text-muted-foreground">$1,592,864.82</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Transactions Table */}
                  <div className="bg-background border border-border rounded-xl p-4 w-full">
                    <h3 className="font-semibold text-foreground mb-4">Recent Transactions</h3>
                    <div className="w-full">
                      <div className="flex items-center text-muted-foreground border-b border-border pb-2 mb-2">
                        <div className="w-1/4">Date</div>
                        <div className="w-2/4">Description</div>
                        <div className="w-1/4 text-right">Amount</div>
                        <div className="w-1/4 text-right">Status</div>
                      </div>
                      
                      {/* Row 1 */}
                      <div className="flex items-center py-2 text-foreground">
                        <div className="w-1/4">Today</div>
                        <div className="w-2/4 font-medium">AWS</div>
                        <div className="w-1/4 text-right">-$5,200</div>
                        <div className="w-1/4 text-right text-amber-500">Pending</div>
                      </div>
                      
                      {/* Row 2 */}
                      <div className="flex items-center py-2 text-foreground">
                        <div className="w-1/4">Yesterday</div>
                        <div className="w-2/4 font-medium">Client Payment</div>
                        <div className="w-1/4 text-right text-green-500">+$125,000</div>
                        <div className="w-1/4 text-right text-green-500">Completed</div>
                      </div>

                      {/* Row 3 */}
                      <div className="flex items-center py-2 text-foreground">
                        <div className="w-1/4">Mar 15</div>
                        <div className="w-2/4 font-medium">Payroll</div>
                        <div className="w-1/4 text-right">-$85,450</div>
                        <div className="w-1/4 text-right text-green-500">Completed</div>
                      </div>

                      {/* Row 4 */}
                      <div className="flex items-center py-2 text-foreground">
                        <div className="w-1/4">Mar 14</div>
                        <div className="w-2/4 font-medium">Office Supplies</div>
                        <div className="w-1/4 text-right">-$1,200</div>
                        <div className="w-1/4 text-right text-green-500">Completed</div>
                      </div>

                    </div>
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
