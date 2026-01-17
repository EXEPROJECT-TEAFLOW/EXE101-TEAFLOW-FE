import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const dashboardTabs = [
  {
    id: 1,
    title: "Dashboard",
    src: "/dashboard-01-light.png",
    alt: "Dashboard Analytics Overview",
  },
  {
    id: 2,
    title: "POS User Management", 
    src: "/dashboard-01-light.png",
    alt: "Dashboard User Management",
  },
  {
    id: 3,
    title: "Inventory",
    src: "/dashboard-01-light.png",
    alt: "Dashboard Reports",
  },
  {
    id: 4,
    title: "HR",
    src: "/dashboard-01-light.png",
    alt: "Dashboard Activity",
  },
  {
    id: 5,
    title: "Analytics & Reports",
    src: "/dashboard-01-light.png",
    alt: "Dashboard Trends",
  },
  {
    id: 6,
    title: "Finance & Accounting",
    src: "/dashboard-01-light.png",
    alt: "Dashboard Analytics Overview",
  },
]

export default function FeaturesDetail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === dashboardTabs.length - 1 ? 0 : prev + 1))
  }

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    // Hero animation
    const tl = gsap.timeline()

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        sliderRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-blur",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
        "-=1"
      )

    // Parallax effect on scroll
    gsap.to(".hero-blur", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    // Auto-slide interval
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      tl.kill()
      clearInterval(slideInterval)
    }
  }, []);

  useEffect(() => {
    // Animate feature items when they come into view
    gsap.fromTo(
      ".feature-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 75%",
        }
      }
    )

    // Animate tab content
    gsap.utils.toArray<HTMLElement>(".tabs-content").forEach((content: HTMLElement) => {
      gsap.set(content, { opacity: 0, y: 20 })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t: ScrollTrigger) => t.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className="">
      <div className="mx-auto">
        <div>
          
          
          <div
            ref={sliderRef}
            className="relative h-[70vh] overflow-hidden mb-8"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {dashboardTabs.map((tab, index) => {
                const position = index - currentSlide;
                const isActive = position === 0;
                const zIndex = isActive ? 30 : 20 - Math.abs(position);
                const scale = isActive ? 1 : 0.9;
                const translateX = position * 100;

                return (
                  <div
                    key={tab.id}
                    className={`absolute transition-all duration-500 ease-in-out rounded-2xl border-4 ${
                      isActive ? 'border-gray-200' : 'border-gray-100'
                    } ${isActive ? 'shadow-2xl' : 'shadow-md'}`}
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      zIndex
                    }}
                  >
                    <div className="relative aspect-[16/9] w-[70vw] max-w-4xl rounded-2xl overflow-hidden">
                      <a 
                        href="https://ruixen.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <img
                          src={tab.src}
                          alt={tab.alt}
                          className="w-full h-full object-cover"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-black/5 rounded-2xl"></div>
                        )}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tab Navigation */}
          <div ref={ctaRef} className="flex justify-center gap-2 md:gap-4 flex-wrap px-4">
            {dashboardTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => goToSlide(index)}
                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
