import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  { title: 'Unha Pé e Mão', img: '/assets/serv1.jpg' },
  { title: 'Só Mão',      img: '/assets/serv2.jpg' },
  { title: 'Só Pé',       img: '/assets/serv3.jpg' },
  { title: 'Alongamento', img: '/assets/serv4.jpg' },
  // etc.
];

export default function Services() {
  return (
    <div className="services">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        {services.map((s,i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ x: i%2===0 ? -100 : 100, opacity:0 }}
            animate={{ x:0, opacity:1 }}
            transition={{ delay: i*0.2 }}
          >
            <img src={s.img} alt={s.title}/>
            <p>{s.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
