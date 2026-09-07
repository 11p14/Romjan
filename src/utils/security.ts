/**
 * DRM and Security Utilities for GrammarVault
 * Implements anti-screenshot deterrence, context menu disable, print blocking, 
 * save prevention, focus loss privacy shield, dynamic watermark, and Web Audio effects.
 */

// Web Audio sound synthesizer (100% offline, zero network dependencies)
class SoundFX {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext(): AudioContext | null {
    if (!this.enabled) return null;
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  playSuccess() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    // Arpeggio chime
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);
      
      gain.gain.setValueAtTime(0.12, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.3);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.35);
    });
  }

  playError() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);
    
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.25);
  }

  playSecurityAlert() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    // Warning buzzer
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(380, now);
    osc.frequency.setValueAtTime(280, now + 0.1);
    
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.3);
  }

  playNotification() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);
    
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.25);
  }
}

export const soundEffects = new SoundFX();

export interface SecurityWarning {
  id: string;
  message: string;
  timestamp: number;
}

export function setupSecurityHandlers(
  onWarning: (warning: string) => void,
  onPrivacyShieldChange: (shieldActive: boolean) => void
) {
  // 1. Right Click Prevention
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    soundEffects.playSecurityAlert();
    onWarning('কন্টেন্ট সুরক্ষিত: রাইট ক্লিক সম্পূর্ণরূপে নিষ্ক্রিয় রাখা হয়েছে!');
    return false;
  };

  // 2. Keyboard Prevention (Ctrl+S, Ctrl+P, Ctrl+U, PrintScreen, F12, Devtools)
  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // PrintScreen / Snip keys
    if (e.key === 'PrintScreen' || (e.shiftKey && isCtrlOrCmd && (key === 's' || key === '3' || key === '4' || key === '5'))) {
      e.preventDefault();
      soundEffects.playSecurityAlert();
      // Overwrite clipboard if accessible
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('⚠️ কন্টেন্ট সুরক্ষিত ও কপিরাইট সংরক্ষিত — স্ক্রিনশট নেওয়া সম্পূর্ণ নিষিদ্ধ!');
        }
      } catch {
        // clipboard permission might not be granted
      }
      onWarning('⚠️ স্ক্রিনশট ডিটেক্টেড! স্ক্রিনশট নেওয়া সম্পূর্ণ নিষিদ্ধ ও ট্রেসযোগ্য।');
      return false;
    }

    // Ctrl+S (Save)
    if (isCtrlOrCmd && key === 's') {
      e.preventDefault();
      soundEffects.playSecurityAlert();
      onWarning('কন্টেন্ট সেভ করা নিষিদ্ধ! আপনি শুধুমাত্র অনলাইন বা অফলাইনে এটি অ্যাপের মাধ্যমে পড়তে পারবেন।');
      return false;
    }

    // Ctrl+P (Print)
    if (isCtrlOrCmd && key === 'p') {
      e.preventDefault();
      soundEffects.playSecurityAlert();
      onWarning('প্রিন্ট অপশন সম্পূর্ণরূপে ব্লক করা হয়েছে। তথ্য সুরক্ষিত রাখা বাধ্যতামূলক।');
      return false;
    }

    // Ctrl+U (View Source)
    if (isCtrlOrCmd && key === 'u') {
      e.preventDefault();
      soundEffects.playSecurityAlert();
      onWarning('সোর্স কোড ও কন্টেন্ট এক্সপোর্ট নিষিদ্ধ!');
      return false;
    }

    // DevTools: F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (
      e.key === 'F12' ||
      (isCtrlOrCmd && e.shiftKey && (key === 'i' || key === 'j' || key === 'c'))
    ) {
      e.preventDefault();
      soundEffects.playSecurityAlert();
      onWarning('ডেভেলপার টুলস অ্যাক্সেস নিষিদ্ধ করা হয়েছে।');
      return false;
    }

    // Ctrl+A / Ctrl+C (Copy Prevention on protected content)
    if (isCtrlOrCmd && (key === 'c' || key === 'a')) {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag !== 'input' && activeTag !== 'textarea') {
        e.preventDefault();
        soundEffects.playSecurityAlert();
        onWarning('কন্টেন্ট কপি করা নিষিদ্ধ! শুধুমাত্র অ্যাপের ভেতরে পড়ার জন্য অনুমোদিত।');
        return false;
      }
    }
  };

  // 3. Print protection via window beforeprint
  const handleBeforePrint = (e: Event) => {
    e.preventDefault();
    soundEffects.playSecurityAlert();
    onWarning('প্রিন্ট নিষিদ্ধ! কন্টেন্ট নিরাপদ রাখতে প্রিন্ট বন্ধ রাখা হয়েছে।');
  };

  // 4. Copy attempt on document
  const handleCopy = (e: ClipboardEvent) => {
    const activeTag = document.activeElement?.tagName.toLowerCase();
    if (activeTag !== 'input' && activeTag !== 'textarea') {
      e.preventDefault();
      soundEffects.playSecurityAlert();
      onWarning('কপি করা বন্ধ রাখা হয়েছে।');
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', 'কন্টেন্ট সুরক্ষিত — কপি ও স্ক্রিনশট নিষিদ্ধ!');
      }
    }
  };

  // 5. Focus Loss / Visibility Change
  // We use document.visibilitychange rather than window.blur so mobile address bar hides, 
  // devtools, and iframe focus do not falsely blank out the screen.
  const handleVisibilityChange = () => {
    if (document.hidden) {
      onPrivacyShieldChange(true);
    } else {
      onPrivacyShieldChange(false);
    }
  };

  const handlePointerOrFocus = () => {
    onPrivacyShieldChange(false);
  };

  window.addEventListener('contextmenu', handleContextMenu);
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('beforeprint', handleBeforePrint);
  document.addEventListener('copy', handleCopy);
  window.addEventListener('focus', handlePointerOrFocus);
  window.addEventListener('pointerdown', handlePointerOrFocus);
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Return cleanup function
  return () => {
    window.removeEventListener('contextmenu', handleContextMenu);
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('beforeprint', handleBeforePrint);
    document.removeEventListener('copy', handleCopy);
    window.removeEventListener('focus', handlePointerOrFocus);
    window.removeEventListener('pointerdown', handlePointerOrFocus);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}
