import React, { useState, useEffect } from 'react';
import './Study.css';

// Use Vite's import.meta.glob to preload all sound files
const soundFiles = import.meta.glob('./sounds/*.wav');

export const Study = () => {
    const [sounds, setSounds] = useState({});

    useEffect(() => {
        const loadSounds = async () => {
            const loadedSounds = {};
            for (const key in soundFiles) {
                if (Object.prototype.hasOwnProperty.call(soundFiles, key)) {
                    try {
                        const soundModule = await soundFiles[key]();
                        const fileName = key.match(/\/([a-zA-Z]+)\.wav$/)[1].toLowerCase(); // Extract file name
                        loadedSounds[fileName] = soundModule.default;
                    } catch (error) {
                        console.error(`Error loading sound file '${key}':`, error);
                    }
                }
            }
            setSounds(loadedSounds);
        };

        loadSounds();
    }, []);

    const playSound = (key) => {
        if (sounds[key]) {
            const audio = new Audio(sounds[key]);
            audio.play();
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key.toLowerCase();
            if (sounds[pressedKey]) {
                playSound(pressedKey);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [sounds]);

    return (
        <div className="study-container">
            <div className="study-title">Learn Alphabet</div>
            {Object.keys(sounds).map((key) => (
                <button
                    className="sound-button"
                    key={key}
                    onClick={() => playSound(key)}
                >
                    {key.toUpperCase()}
                </button>
            ))}
        </div>
    );
};
