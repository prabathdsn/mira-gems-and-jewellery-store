'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Lock
} from 'lucide-react';
import { ContactFormData } from '../../types';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledPiece = searchParams.get('piece') || '';
  const prefilledPrice = searchParams.get('price') || '';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: prefilledPiece ? `Inquiry regarding: ${prefilledPiece}` : 'Bespoke Gemstone & Jewellery Consultation',
    interestCategory: prefilledPiece ? 'Specific Showcase Piece' : 'Ceylon Sapphires',
    message: prefilledPiece 
      ? `Dear Atelier Owner,\n\nI am writing to inquire about "${prefilledPiece}"${prefilledPrice ? ` (listed at $${Number(prefilledPrice).toLocaleString()})` : ''}. Please let me know if this piece is currently available for private viewing or acquisition, and provide any additional gemological dossiers.\n\nThank you.`
      : '',
    preferredContactMethod: 'email',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledPiece) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding: ${prefilledPiece}`,
        interestCategory: 'Specific Showcase Piece',
        message: `Dear Atelier Owner,\n\nI am writing to inquire about "${prefilledPiece}"${prefilledPrice ? ` (listed at $${Number(prefilledPrice).toLocaleString()})` : ''}. Please let me know if this piece is currently available for private viewing or acquisition, and provide any additional gemological dossiers.\n\nThank you.`,
      }));
    }
  }, [prefilledPiece, prefilledPrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setInquiryRef(result.inquiryRef);
      } else {
        setErrorMessage(result.error || 'Failed to dispatch email. Please try again.');
      }
    } catch {
      setErrorMessage('Network connection error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-14 sm:py-20 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs uppercase tracking-[0.25em] font-semibold mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Concierge Communication</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-stone-900 font-light tracking-wide mb-4">
            Contact the Atelier Owner
          </h1>

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Whether inquiring about a specific unheated gemstone, commissioning a bespoke high jewellery creation, or booking a private salon consultation in Colombo or Geneva, our owner and master gemologists read every message personally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Atelier Information & Salons */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Owner Statement Box */}
            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-amber-200 relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-800 font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Our Personal Guarantee</span>
              </div>

              <blockquote className="font-serif italic text-stone-800 text-base sm:text-lg leading-relaxed mb-6">
                &ldquo;Every gemstone in our vault was inspected by our own hands at the mine site. When you contact us, you speak directly with the stewards of these earth treasures.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                  A
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Pradeep de Silva, FGA</h4>
                  <p className="text-xs text-stone-500 font-medium">Owner & Senior Fellow Gemologist</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Points */}
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-serif text-xl text-stone-900 font-medium mb-2">
                Atelier Directory
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 block text-xs">Direct Owner Inbox</span>
                    <a href="mailto:owner@miragems.com" className="text-stone-900 font-semibold hover:text-amber-700 transition-colors">
                      owner@miragems.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 block text-xs">Private Atelier Phone / WhatsApp</span>
                    <a href="tel:+18004926472" className="text-stone-900 font-semibold hover:text-amber-700 transition-colors">
                      +1 (800) 492-MIRA
                    </a>
                    <span className="text-stone-500 text-xs block mt-0.5">Direct line to concierge team</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 block text-xs">Flagship Salons</span>
                    <span className="text-stone-900 block font-medium">Colombo Flagship: Galle Face Court 03</span>
                    <span className="text-stone-500 text-xs block">Geneva Private Salon: Rue du Rhône 42</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 block text-xs">Viewing Hours</span>
                    <span className="text-stone-800 block">Monday – Saturday: 10:00 AM – 7:00 PM</span>
                    <span className="text-stone-500 text-xs block">Sundays: Private Appointments Only</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-stone-500 text-xs">
                <Lock className="w-3.5 h-3.5 text-amber-600" />
                <span>All client communications and bespoke inquiries are held strictly confidential.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Required Email Form to Owner */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-10 shadow-sm">
              
              {submitted ? (
                /* Success Feedback View */
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-300 text-amber-600 mx-auto flex items-center justify-center animate-bounce shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-amber-800 font-semibold">
                      Email Dispatched Successfully
                    </span>
                    <h2 className="font-serif text-3xl text-stone-900 font-medium">
                      Thank You, {formData.fullName}
                    </h2>
                    <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                      Your message has been sent directly to the owner’s private inbox. A senior gemologist or atelier director will review your request and reply via {formData.preferredContactMethod} within 4 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-xs text-stone-600">
                    <span className="block text-stone-500 mb-1">Inquiry Tracking Dossier Reference</span>
                    <strong className="text-amber-800 text-base font-mono tracking-wider">
                      #{inquiryRef}
                    </strong>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          subject: 'General Inquiry',
                          interestCategory: 'Ceylon Sapphires',
                          message: '',
                          preferredContactMethod: 'email',
                        });
                      }}
                      className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs uppercase tracking-wider rounded-lg font-semibold transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium mb-1">
                      Send an Email to the Owner
                    </h2>
                    <p className="text-xs text-stone-500">
                      Fill out this brief form and our atelier owner will respond directly to your correspondence.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2">
                        Your Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lady Victoria Spencer"
                        className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-lg px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2">
                        Email Address <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. victoria@domain.com"
                        className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-lg px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Inquired Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-lg px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2">
                        Primary Interest
                      </label>
                      <select
                        value={formData.interestCategory}
                        onChange={(e) => setFormData({ ...formData, interestCategory: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-lg px-4 py-3 text-xs sm:text-sm text-stone-800 focus:outline-none cursor-pointer font-medium"
                      >
                        <option value="Ceylon Sapphires">Ceylon Royal Blue Sapphires</option>
                        <option value="Colombian Emeralds">Colombian Muzo Emeralds</option>
                        <option value="Burmese Rubies">Burmese Pigeon Blood Rubies</option>
                        <option value="Diamond Solitaires">Flawless Diamond Solitaires</option>
                        <option value="Bespoke Commission">Bespoke Custom Jewellery Design</option>
                        <option value="Specific Showcase Piece">Specific Store Showcase Piece</option>
                        <option value="Salon Appointment">Book Private Salon Appointment</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject Line */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2">
                      Inquiry Subject <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiring about unheated sapphire carat availability"
                      className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-lg px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Message to the owner */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2">
                      Your Message to the Owner <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your gemstone preferences, timeline, budget range, or ring size..."
                      className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-lg p-4 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors resize-y"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2">
                      Preferred Response Channel
                    </label>
                    <div className="flex gap-4">
                      {(['email', 'phone', 'whatsapp'] as const).map((method) => (
                        <label key={method} className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer font-medium">
                          <input
                            type="radio"
                            name="contactMethod"
                            checked={formData.preferredContactMethod === method}
                            onChange={() => setFormData({ ...formData, preferredContactMethod: method })}
                            className="accent-amber-600"
                          />
                          <span className="capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 hover:text-white font-bold text-xs uppercase tracking-[0.25em] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Transmitting Inquiry to Owner...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          <span>Send Message to Owner</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-amber-700 font-serif">Loading Contact Form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
