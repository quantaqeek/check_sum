'use client'

import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaShare } from 'react-icons/fa'
import { useState } from 'react'

type MobileSocialShareProps = {
  title: string
  url: string
}

export function MobileSocialShare({ title, url }: MobileSocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    instagram: '#',
  }

  const socialButtons = [
    { name: 'WhatsApp', icon: FaWhatsapp, href: shareLinks.whatsapp, color: 'bg-green-500' },
    { name: 'LinkedIn', icon: FaLinkedin, href: shareLinks.linkedin, color: 'bg-blue-700' },
    { name: 'Twitter', icon: FaTwitter, href: shareLinks.twitter, color: 'bg-blue-400' },
    { name: 'Instagram', icon: FaInstagram, href: shareLinks.instagram, color: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500' },
  ]

  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Share post"
      >
        <FaShare className="w-5 h-5" />
      </button>

      {/* Share Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 -z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Share Options */}
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 min-w-[200px] border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Share this post
            </p>
            <div className="space-y-2">
              {socialButtons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-lg ${social.color} text-white hover:opacity-90 transition-opacity`}
                  onClick={() => setIsOpen(false)}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}