import { useState } from 'react';
import thumbnail from '../assets/images/video-thumbnail.jpg';

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const videoId = 'tRmtL8yxcSA';

  return (
    <section className="px-4 pb-10">
      <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Apresentação do Produto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group"
            aria-label="Reproduzir vídeo"
          >
            <img
              src={thumbnail}
              alt="Thumbnail do vídeo"
              className="w-full h-full object-cover"
              width={480}
              height={360}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <svg className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </section>
  );
}