import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-dark-100/30 gsap-reveal overflow-hidden">
      <div className="container-custom">
        <SectionHeading subtitle="Reviews" title="What Clients Say" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            className="testimonials-swiper pb-14 !overflow-visible"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="glass cursor-hover mx-2 rounded-2xl p-8 transition hover:border-accent-purple/30 hover:shadow-glow">
                  <div className="mb-4 flex gap-1 text-accent-neon">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">&ldquo;{item.text}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-accent-purple/50"
                    />
                    <div>
                      <p className="font-outfit font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-white/50">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.3);
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
