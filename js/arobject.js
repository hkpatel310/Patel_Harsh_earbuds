(() => {
    // Data for hotspot content
    const hotspotData = [
        {
            title: "Charging Point",
            text: "The charging point is where you connect your earbuds to their charging case. It's essential for recharging your earbuds and keeping them powered up. Make sure to align your earbuds correctly with the charging points to ensure a proper connection.",
       
          },
      
      {
        title: "Ear Tip",
        text: "The ear tip is the part of the earbud that comes into direct contact with your ear canal. It plays a significant role in comfort and sound quality. Different ear tip sizes and materials can affect the fit and noise isolation, ensuring a personalized listening experience.",
        
      },
      {
        title: "Battery",
        text: "The battery is the powerhouse of your earbuds, providing you with hours of uninterrupted music playback or talk time. It's a crucial component that determines how long you can use your earbuds before needing to recharge them.",
      },
      {
        title: "Noise Cancellation",
        text: "Noise cancellation technology is a game-changer in the world of earbuds. It actively reduces or eliminates ambient noise, allowing you to immerse yourself fully in your audio without distractions. Explore the noise cancellation feature for a quieter, more focused experience.",
      },
      {
        title: "One-Tap Controls",
        text: "Many modern earbuds feature one-tap controls that allow you to pause/play music, skip tracks, answer calls, or activate voice assistants with a simple tap on the earbud's surface. Familiarize yourself with these controls for a seamless user experience.",
      },
      {
        title: "Speaker",
        text: "The speaker is the heart of your earbuds, responsible for delivering crystal-clear audio. It's essential to understand the quality and capabilities of the speaker for a rich and immersive sound experience. Look for features like high-quality drivers and balanced sound profiles.",
      },
    ];
  
    // Function to populate hotspot content
    function populateHotspotContent() {
      hotspotData.forEach((data, index) => {
        const hotspotTitle = document.getElementById(`hotspot-title-${index + 1}`);
        const hotspotText = document.getElementById(`hotspot-text-${index + 1}`);
    
  
        if (hotspotTitle && hotspotText) {
          hotspotTitle.textContent = data.title;
          hotspotText.textContent = data.text;
  
        }
      });
    }
  
    const showInfo = function () {
        const annotation = this.querySelector(".HotspotAnnotation");
        gsap.to(annotation, { autoAlpha: 1  }); // Show with GSAP autoAlpha
      };
    
      // Function to hide hotspot annotation using GSAP autoAlpha
      const hideInfo = function () {
        const annotation = this.querySelector(".HotspotAnnotation");
        gsap.to(annotation, { autoAlpha: 0  }); // Hide with GSAP autoAlpha
      };

    // Add an event listener to load hotspot content when the page is ready
    document.addEventListener("DOMContentLoaded", populateHotspotContent);
  
    const modelLoaded = () => {
      // Select all hotspots
      const hotspots = document.querySelectorAll(".Hotspot");
  
    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
    };
  
    // Add event listener for model load
    const model = document.querySelector("#model");
    model.addEventListener("load", modelLoaded);
  })();
  