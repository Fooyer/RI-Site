// Podcast.jsx
import { useEffect, useState, useRef } from "react";
import { Mic2, Play, Pause, Volume2, Headphones } from "lucide-react";
import styles from "./Podcast.module.css";

import podcastAudio from "../assets/podcast.mp3";

export default function Podcast() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const percent = e.target.value / 100;
    audio.currentTime = percent * duration;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={styles.appContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Mic2 className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>
              <span className={styles.gradientTextBlue}>Podcast:</span>
              <br />
              <span className={styles.whiteText}>Relações Interpessoais</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Uma jornada sonora explorando os desafios e oportunidades das
              relações interpessoais no ambiente profissional e pessoal.
            </p>
          </div>

          {/* Player de Áudio */}
          <div className={styles.audioPlayer}>
            <div className={styles.playerHeader}>
              <div className={styles.playerIcon}>
                <Headphones className={styles.headphonesIcon} />
              </div>
              <div className={styles.playerInfo}>
                <h3 className={styles.playerTitle}>
                  Episódio: Relações Interpessoais
                </h3>
                <p className={styles.playerSubtitle}>
                  Discussão sobre relações interpessoais no ambiente de trabalho
                  e pessoal.
                </p>
              </div>
            </div>

            <div className={styles.playerControls}>
              <button onClick={togglePlay} className={styles.playButton}>
                {isPlaying ? (
                  <Pause className={styles.playIcon} />
                ) : (
                  <Play className={styles.playIcon} />
                )}
              </button>

              <div className={styles.progressContainer}>
                <span className={styles.timeLabel}>
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className={styles.progressBar}
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #06b6d4 ${progress}%, rgba(255,255,255,0.1) ${progress}%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
                <span className={styles.timeLabel}>{formatTime(duration)}</span>
              </div>

              <Volume2 className={styles.volumeIcon} />
            </div>

            <audio ref={audioRef} src={podcastAudio} preload="metadata" />
          </div>
        </div>
      </section>

      {/* Conteúdo Section */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.gradientTextBlue}>Sobre o</span> Podcast
          </h2>

          {/* Autores */}
          <div className={styles.autoresSection}>
            <h3 className={styles.autoresTitle}>Equipe do Podcast</h3>
            <div className={styles.autoresList}>
              <div className={styles.autorItem}>Vitor</div>
              <div className={styles.autorItem}>Alyne</div>
              <div className={styles.autorItem}>Vitória</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
