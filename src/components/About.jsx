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
        <p>
          Olá! Sou a <strong>Cibele Gomes</strong>, apaixonada pelo universo das unhas e dedicada a realçar a beleza de cada cliente com carinho, cuidado e criatividade. Com anos de experiência e atenção aos mínimos detalhes, ofereço serviços personalizados para valorizar seu estilo e autoestima.
        </p>
        <p>
          Aqui, cada atendimento é feito com amor, usando produtos de qualidade e técnicas modernas. Meu objetivo é que você se sinta linda, confiante e bem cuidada – sempre!
        </p>
        <p>
          Venha viver essa experiência única. 💖
        </p>
      </motion.div>
    </div>
  );
}
