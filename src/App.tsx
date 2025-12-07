import { GitlabLogoIcon, GithubLogoIcon, AtIcon } from '@phosphor-icons/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="flex flex-col items-center">
          <div className="w-90 h-90 rounded-full border-8 border-black mb-10 overflow-hidden">
            <img
              src="/assets/safal.webp"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h1 className="text-6xl text-black mb-6">Safal Lama</h1>
          <p className="text-black text-2xl mb-16">C Developer</p>

          <div className="flex gap-8">
            <a
              href="https://github.com/ryuzinoh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-50 transition-opacity"
            >
              <GithubLogoIcon size={40} weight="fill" />
            </a>
            <a
              href="https://gitlab.com/safal726"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-50 transition-opacity"
            >
              <GitlabLogoIcon size={40} weight="fill" />
            </a>
            <a
              href="mailto:serena@safallama.com.np"
              className="text-black hover:opacity-50 transition-opacity"
            >
              <AtIcon size={40} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
