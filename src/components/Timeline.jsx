const Timeline = () => {
  const events = [
    {
      year: "2018",
      title: "THE GENESIS",
      icon: "💡",
      description:
        "In the dawn of 2018, our visionary Founder embarked on a solo quest, transforming his home into the incubator of dreams...",
    },
    {
      year: "2019",
      title: "CO-WORKING CHRONICLES",
      icon: "💬",
      description:
        "A year later, with a growing team, we outgrew the cozy home nest and ventured into a vibrant co-working space...",
    },
    {
      year: "2020",
      title: "THRIVING IN ADVERSITY",
      icon: "🖥️",
      description:
        "As the world grappled with challenges, we adapted and thrived. Our client base expanded to a formidable level...",
    },
    {
      year: "2021",
      title: "THE EVOLUTION UNVEILED",
      icon: "📚",
      description:
        "The year 2021 was our metamorphosis. VSJPLE Technologies Pvt. Ltd. emerged, and our first office became a hub of innovation...",
    },
    {
      year: "2022",
      title: "THE BOLD LEAP",
      icon: "🌐",
      description:
        "VSJPLE is an IT services, consulting, and business solutions organization that has been partnering...",
    },
    {
      year: "2023",
      title: "THE GRAND UNVEILING",
      icon: "🚩",
      description:
        "The year 2023 was nothing short of a fairy tale. We moved into a luxury office, expanded the team, and celebrated...",
    },
  ];

  return (
    <div className="bg-black text-white p-10 min-h-screen">
      <div className="max-w-7xl mx-auto relative ">
        <svg
          width="838"
          height="1009"
          viewBox="0 0 838 1009"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-5%]"
        >
          <path
            d="M496 0V55C496 125.692 438.692 183 368 183H128.5C57.8076 183 0.5 240.308 0.5 311V384.5C0.5 455.192 57.8076 512.5 128.5 512.5H709C779.692 512.5 837 569.808 837 640.5V706C837 776.692 779.692 834 709 834H128.5C57.8076 834 0.5 891.308 0.5 962V1008.5"
            stroke="white"
          />
        </svg>
        {/* <div className="node1 flex items-center justify-around relative top-[348px] max-w-[1000px]">
            <div className="left_div">
                <h2 className="text-6xl">2018</h2>
                <p className="text-xl">THE GENESIS</p>
            </div>
            <div className="right_div relative flex items-center justify-center">
                <div className="hover_border_div absolute -left-20 h-[325px] w-[400px] border-l-0 border-white rounded-[130px]"></div>
                 <div className="circle h-52 w-52 bg-yellow-200 rounded-full"></div>
                 <p className="text-lg max-w-[400px] ml-10">In the dawn of 2018, our visionary Founder embarked on a solo quest, transforming his home into the incubator of dreams...</p>
            </div>
        </div> */}
        <div className="node1 flex items-center justify-around relative top-[298px] max-w-[1000px] group cursor-pointer">
          <div className="left_div">
            <h2 className="text-6xl group-hover:text-yellow-500">2018</h2>
            <p className="text-xl group-hover:text-yellow-500">THE GENESIS</p>
          </div>
          <div className="right_div relative flex items-center justify-center">
            <div className="hover_border_div absolute -left-[78px] h-[325px] w-[400px] rounded-[130px] group-hover:border-yellow-500 group-hover:border-l-8"></div>
            <div className="circle h-52 w-52 bg-yellow-200 rounded-full group-hover:bg-yellow-500"></div>
            <p className="text-lg max-w-[400px] ml-10 group-hover:text-yellow-500">
              In the dawn of 2018, our visionary Founder embarked on a solo
              quest, transforming his home into the incubator of dreams...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
