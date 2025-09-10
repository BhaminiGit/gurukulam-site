import React, { useState } from 'react'

const AboutPage = () => {

   const [expandedClass, setExpandedClass] = useState(null);

  const toggleClass = (index) => {
    setExpandedClass(expandedClass === index ? null : index);
  };
  return (
    <div className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#FFF1EA' }}>

      {/* Header */}
      <header className="relative text-center py-8 shadow-2xl"
        style={{
          background: `linear-gradient(135deg, #957FEF 0%, #7161EF 50%, #150946 100%)`,
          color: '#FFF1EA'
        }}>
        <div className="animate-fadeIn">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-2xl"
            style={{ fontFamily: 'Belanosima, sans-serif' }}>
            About Austin Gurukulam
          </h1>
          <div className="w-32 h-1 mx-auto rounded-full shadow-lg"
            style={{ background: 'linear-gradient(90deg, #B79CED, #DEC0F1)' }}></div>
        </div>

      </header>

      {/* Intro section */}
      <section className="relative py-16 px-7">
        <div className="max-w-[80%] mx-auto">
          <div className="backdrop-blur-sm  rounded-3xl p-4">
            <p className="text-4xl leading-relaxed italic text-center font-belanosima text-darkpurple">
              Austin Gurukulam at the Austin Hindu Temple is the hub for Hindu parents and children to connect, grow, and strengthen their community. It provides a space to learn prayers, stories, music, and languages, while nurturing strong Hindu values and fostering bonds between families..
            </p>
          </div>
        </div>
      </section>


      {/* Community section */}

  <section className="relative py-7">
  <div className="max-w-4xl mx-auto">
    <div
      className="backdrop-blur-sm border rounded-3xl py-8 px-6 text-center transition-all"
      style={{
        background: `linear-gradient(135deg, #DEC0F1 0%, #B79CED 100%)`, // 💜 medium purple → light purple
        borderColor: '#957FEF',
        boxShadow:
          '0 20px 40px -10px rgba(113, 97, 239, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      }}
    >
      <div
        className="text-4xl font-semibold mb-4"
        style={{ fontFamily: 'Belanosima, sans-serif', color: '#150946' }}
      >
        Meet, participate in and strengthen the Austin Hindu community.
      </div>
      <div
        className="w-24 h-1 mx-auto rounded-full mt-4"
        style={{ background: 'linear-gradient(90deg, #FFF1EA, #B79CED)' }}
      ></div>
    </div>
  </div>
</section>

      {/* Features grid */}
      <section className="relative py-10 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { text: "Develop strong Hindu values." },
            { text: "Learn shlokas and bhajans." },
            { text: "Hear stories from our culture and puranas." },
            { text: "Learn our Indian fine arts." },
            { text: "Discuss and be encouraged to ask questions." },
            { text: "Learn our native languages!" },
          ].map((feature, index) => (
            <div
              key={index}
              className="  flex justify-center items-center  backdrop-blur-sm border rounded-2xl p-8 text-center  transition-all duration-300 hover:scale-105 animate-fade-in group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #FFF1EA 0%, #DEC0F1 100%)`,
                borderColor: '#957FEF',
                boxShadow: '0 10px 25px -5px rgba(149, 127, 239, 0.2), 0 0 0 1px rgba(149, 127, 239, 0.1)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="textDiv text-3xl font-normal group-hover:font-medium transition-all duration-300 font-belanosima "
                style={{ color: '#150946' }}>
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div
        className="backdrop-blur-sm border max-w-md mx-auto rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 animate-fade-in group relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #FFF1EA 0%, #DEC0F1 100%)`,
          borderColor: '#957FEF',
          boxShadow: '0 10px 25px -5px rgba(149, 127, 239, 0.2), 0 0 0 1px rgba(149, 127, 239, 0.1)',
        }}
      >
        <div className="text-2xl font-medium group-hover:font-semibold  transition-all duration-300"
          style={{ color: '#150946' }}>
          AND MORE!
        </div>
      </div>

        <img src='/assets/rangoli-1.png' className='w-40 py-10  m-auto'/>


      {/* Information box */}
      <section className="relative py-8 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-sm border rounded-3xl py-16 px-12 text-center transition-all duration-500 hover:scale-[1.01] animate-fade-in"
            style={{
              background: `linear-gradient(135deg, #B79CED 0%, #DEC0F1 100%)`,
              borderColor: '#957FEF',
              boxShadow: '0 25px 50px -12px rgba(183, 156, 237, 0.4), 0 0 0 1px rgba(149, 127, 239, 0.2)'
            }}>
            <h2 className="text-5xl font-bold mb-6"
              style={{ fontFamily: 'Belanosima, sans-serif', color: '#150946' }}>
              Information About Classes
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full"
              style={{ background: 'linear-gradient(90deg, #7161EF, #150946)' }}></div>
          </div>
        </div>
      </section>

      {/* Classes list */}
  <section className="relative py-16 px-8 pb-32">
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { 
              name: "Dharma Class", 
              gradient: "linear-gradient(135deg, #DEC0F1 0%, #B79CED 100%)",
              description: "Learn fundamental Hindu values, ethics, and philosophy through interactive discussions and storytelling.",
              details: "Age groups: 6-12 years | Duration: 1 hour | Weekly sessions covering topics like karma, dharma, and moral values through engaging activities."
            },
            { 
              name: "Gita Class", 
              gradient: "linear-gradient(135deg, #B79CED 0%, #957FEF 100%)",
              description: "Study the timeless wisdom of the Bhagavad Gita with age-appropriate interpretations and practical applications.",
              details: "Age groups: 10+ years | Duration: 1.5 hours | Verse-by-verse study with modern applications and group discussions."
            },
            { 
              name: "Bhajan Class", 
              gradient: "linear-gradient(135deg, #957FEF 0%, #7161EF 100%)",
              description: "Learn devotional songs and mantras that connect you to Hindu spiritual traditions and culture.",
              details: "All ages welcome | Duration: 45 minutes | Learn popular bhajans, practice pronunciation, and understand meanings."
            },
            { 
              name: "Tabla Class", 
              gradient: "linear-gradient(135deg, #7161EF 0%, #150946 100%)",
              description: "Master the rhythmic art of tabla playing with traditional techniques and contemporary applications.",
              details: "Age groups: 8+ years | Duration: 1 hour | From basic beats to complex compositions, instruments provided for beginners."
            },
            { 
              name: "Violin Class", 
              gradient: "linear-gradient(135deg, #150946 0%, #7161EF 100%)",
              description: "Learn Carnatic violin with focus on ragas, classical compositions, and devotional pieces.",
              details: "Age groups: 6+ years | Duration: 1 hour | Individual and group lessons, violin rental available for students."
            },
            { 
              name: "Language Classes", 
              gradient: "linear-gradient(135deg, #DEC0F1 0%, #957FEF 100%)",
              description: "Preserve your heritage by learning Telugu and Tamil through interactive lessons and cultural context.",
              details: "All ages | Duration: 45 minutes each | Separate classes for Telugu and Tamil, focusing on speaking, reading, and writing."
            },
          ].map((classItem, index) => (
            <div
              key={index}
              className="backdrop-blur-sm border rounded-2xl transition-all duration-500 animate-fade-in group relative overflow-hidden cursor-pointer"
              style={{ 
                background: classItem.gradient,
                borderColor: '#957FEF',
                boxShadow: expandedClass === index 
                  ? '0 25px 50px -12px rgba(149, 127, 239, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 15px 35px -5px rgba(149, 127, 239, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                animationDelay: `${index * 0.1}s`,
                transform: expandedClass === index ? 'scale(1.02)' : 'scale(1)'
              }}
              onClick={() => toggleClass(index)}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-20 -translate-y-2 translate-x-2 rounded-full"
                   style={{ background: '#FFF1EA' }}></div>
              
              {/* Header */}
              <div className="py-8 px-12 text-center relative z-10">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300"
                       style={{ 
                         fontFamily: 'Belanosima, sans-serif', 
                         color: index >= 2 ? '#FFF1EA' : '#150946'
                       }}>
                    {classItem.name}
                  </div>
                  
                  {/* Chevron icon */}
                  <div 
                    className={`text-2xl transition-transform duration-300 ${expandedClass === index ? 'rotate-180' : ''}`}
                    style={{ color: index >= 2 ? '#FFF1EA' : '#150946' }}
                  >
                    ▼
                  </div>
                </div>
              </div>

              {/* Expandable content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ${
                  expandedClass === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-12 pb-8 space-y-4">
                  {/* Description */}
                  <div 
                    className="text-lg leading-relaxed"
                    style={{ color: index >= 2 ? '#FFF1EA' : '#150946' }}
                  >
                    {classItem.description}
                  </div>
                  
                  {/* Details */}
                  <div 
                    className="text-sm font-medium p-4 rounded-xl"
                    style={{ 
                      backgroundColor: index >= 2 ? 'rgba(255, 241, 234, 0.2)' : 'rgba(21, 9, 70, 0.1)',
                      color: index >= 2 ? '#FFF1EA' : '#150946'
                    }}
                  >
                    {classItem.details}
                  </div>

                  {/* Call to action */}
                  <div className="pt-2">
                    <button 
                      className="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: index >= 2 ? '#FFF1EA' : '#150946',
                        color: index >= 2 ? '#150946' : '#FFF1EA'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add your enrollment/contact logic here
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    
    </div>
  )
}

export default AboutPage