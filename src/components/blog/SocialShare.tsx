'use client'

import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

type SocialShareProps = {
  title: string
  url: string
}

export function SocialShare({ title, url }: SocialShareProps) {
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    instagram: '#', // Instagram doesn't support direct sharing via URL
  }

  const socialButtons = [
    { 
      name: 'WhatsApp', 
      icon: FaWhatsapp, 
      href: shareLinks.whatsapp,
      color: 'hover:bg-green-500',
      iconColor: 'group-hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      href: shareLinks.linkedin,
      color: 'hover:bg-blue-700',
      iconColor: 'group-hover:text-white'
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter, 
      href: shareLinks.twitter,
      color: 'hover:bg-blue-400',
      iconColor: 'group-hover:text-white'
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      href: shareLinks.instagram,
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      iconColor: 'group-hover:text-white'
    },
  ]

  return (
    <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-10">
      <div className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 text-center mb-1">
          Share
        </span>
        {socialButtons.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md`}
            aria-label={`Share on ${social.name}`}
          >
            <social.icon className={`w-5 h-5 text-gray-700 dark:text-gray-300 ${social.iconColor} transition-colors`} />
          </a>
        ))}
      </div>
    </div>
  )
}