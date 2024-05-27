import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedImage({ src, alt, source, direction = "left", className }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      <img
        className="lg:rounded-tl-[180px] lg:rounded-tr-[180px] rounded-2xl sm:rounded-none w-full h-auto object-cover"
        src={source}
        alt={alt}
      />
      <img className="w-full h-auto object-cover" src={src} alt={alt} />
    </motion.div>
  );
}
