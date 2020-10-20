import { motion } from 'framer-motion';
import styles from './styles.module.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div
      className="relative flex content-center items-center justify-center"
      style={{
        minHeight: '70vh',
      }}
    >
      <div
        className="absolute w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/bg.svg')",
        }}
      >
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div className="container relative mx-auto grid place-items-center px-10 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            key={title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-5"
          >
            {title}
          </motion.h1>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-white ${styles.highlighted}`}
          >
            FrontEndCafé
          </h1>
          <p className="leading-6 text-gray-200 font-thin text-xl md:text-2xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
