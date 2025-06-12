import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <div className="about-container">
      <motion.img
        src={profile}
        alt="Sobre mim"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className="about-image"
      />
      <motion.div
        className="about-text"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Sobre Mim</h2>
        <p>Texto provisório sobre o estúdio …</p>
      </motion.div>
    </div>
  );
}
