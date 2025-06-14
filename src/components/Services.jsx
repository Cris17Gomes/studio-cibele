import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

import serv1 from '../assets/serv1.jpg';
import serv2 from '../assets/serv2.jpg';
import serv3 from '../assets/serv3.jpg';
import serv4 from '../assets/serv4.jpg';
import serv5 from '../assets/serv5.jpg';
import serv6 from '../assets/serv6.jpg';


const services = [
  { title: 'Pé e Mão', img: serv1 },
  { title: 'Só Pé',        img: serv2 },
  { title: 'Só Mão',         img: serv3 },
  { title: 'Alongamento',   img: serv4 },
  { title: 'Banho em gel ',   img: serv5 },
  { title: 'Plástica dos Pés ',   img: serv6 },

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
