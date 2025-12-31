const ugcVideos = [
  {
    id: 1,
    title: "The Sand Test",
    description: "Watch as our tool handles extreme conditions with ease",
    duration: "0:45",
  },
  {
    id: 2,
    title: "Deep Clean Test",
    description: "Removing dirt from every crevice effortlessly",
    duration: "0:38",
  },
  {
    id: 3,
    title: "Durability Test",
    description: "12-month stress test proves longevity",
    duration: "0:32",
  },
  {
    id: 4,
    title: "User Experience",
    description: "Real users share their feedback and results",
    duration: "0:42",
  },
];

export default function SocialProofSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See It In Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch real users demonstrate the power and precision of our tool
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {ugcVideos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-background rounded-lg overflow-hidden aspect-video flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/60 flex flex-col justify-end p-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-sm md:text-base">{video.title}</h3>
                  <p className="text-xs md:text-sm text-gray-200">{video.description}</p>
                </div>
              </div>

              <button className="absolute inset-0 flex items-center justify-center hover:bg-black/20 transition-colors group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              <span className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white font-mono">
                {video.duration}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">What People Love About This Tool</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", label: "Speed", value: "10x faster than alternatives" },
              { icon: "🎯", label: "Precision", value: "Professional-grade accuracy" },
              { icon: "💪", label: "Power", value: "30 AW of consistent force" },
              { icon: "🔒", label: "Durability", value: "Sealed systems last forever" },
              { icon: "🌍", label: "Eco-Friendly", value: "H11 HEPA filtration" },
              { icon: "⚙️", label: "Universal", value: "Works with all systems" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="font-bold mb-1">{feature.label}</h4>
                <p className="text-sm text-muted-foreground">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
