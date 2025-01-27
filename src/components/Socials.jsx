import React from "react";
import {
    Mail,
    Github,
    Twitter,
    Linkedin,
    Youtube,
    Instagram,
    Copy,
    Check,
    quora,
  } from "lucide-react";
const socialLinks = [

    {
      name: "GitHub",
      href: "https://github.com/Bhavana-Jami",
      icon: (props) => (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path
            fill="currentColor"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      ),
    },
   
   
    
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/bhavana-jami-47a6081b2/",
        icon: (props) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
          >
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zm-13.35 20.45H5.33V9.03h3.55v11.42zm-1.78-13.06a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm14.26 13.06h-3.54v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.69h-3.54V9.03h3.4v1.56h.05c.47-.89 1.6-1.82 3.29-1.82 3.52 0 4.17 2.32 4.17 5.34v6.34z" />
          </svg>
        ),
      },
      {
        name: "Quora",
        href: "https://www.quora.com/profile/Bhavana-Jami-1",
        icon: (props) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
          >
            <path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 3.293 0 6.342-1.29 8.627-3.615a1 1 0 0 0-1.453-1.374c-1.972 2.084-4.675 3.239-7.174 3.239-5.523 0-10-4.478-10-10S6.477 2 12 2s10 4.478 10 10c0 1.727-.446 3.457-1.281 4.911-.88 1.523-2.134 2.688-3.719 3.33a5.582 5.582 0 0 1-4.164-.008c-.276-.118-.526-.256-.755-.42 1.15-.527 2.127-1.45 2.734-2.664 1.425-.32 2.506-1.183 3.088-2.396.614-1.27.685-2.813.073-4.114-.601-1.282-1.718-2.213-3.071-2.553-1.13-.283-2.457-.248-3.468.117C9.52 8.36 8.72 8.94 8.278 9.65c-.459.74-.68 1.63-.635 2.605.047.993.39 1.883.953 2.52a3.837 3.837 0 0 0 1.655 1.108c.523.166 1.09.226 1.635.178-.69 1.08-1.916 1.734-3.23 1.722-1.445-.013-2.77-.82-3.501-2.03-.88-1.468-1.053-3.442-.473-5.116.593-1.691 1.864-3.08 3.596-3.742 1.728-.66 3.71-.567 5.394.264 1.711.846 2.977 2.358 3.512 4.125.553 1.81.424 3.922-.346 5.673-.814 1.841-2.274 3.243-4.09 3.843a1 1 0 0 0-.062 1.9 7.568 7.568 0 0 0 5.663-.346c1.91-.813 3.504-2.167 4.54-3.889C23.631 15.407 24 13.719 24 12c0-6.628-5.372-12-12-12zm.5 9c.615 0 1.24.154 1.75.456.52.306.914.78 1.154 1.352.242.579.28 1.284.096 1.898-.174.586-.553 1.1-1.045 1.44a2.763 2.763 0 0 1-1.45.4h-.063c-.619 0-1.244-.157-1.757-.46-.521-.308-.917-.786-1.157-1.366-.244-.586-.283-1.3-.096-1.91.184-.61.561-1.125 1.046-1.463A2.757 2.757 0 0 1 12.5 9z" />
          </svg>
        ),
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/@iambluewonk",
        icon: (props) => (
          <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
              fill="currentColor"
              d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            />
          </svg>
        ),
      },
      
  ];
const Socials = () => {
  return (
    <div className="flex justify-start   space-x-2 ">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="relative group"
          aria-label={link.name}
        >
          <div className="absolute inset-0 bg-white/5 rounded-lg blur-lg transition-all group-hover:bg-white/10 group-hover:blur-xl" />
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1CB5E0]/40 to-[#000851]/40 shadow-lg backdrop-blur-sm transition-all group-hover:border-white/20 group-hover:from-white/15 group-hover:to-white/10">
            <link.icon className="w-6 h-6 text-white/80 transition-colors group-hover:text-white" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
