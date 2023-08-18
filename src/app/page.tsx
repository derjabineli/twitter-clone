import LeftSideBar from "@/components/LeftSideBar"
import MainComponent from "@/components/MainComponent"
import RightSideBar from "@/components/RightSideBar"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSideBar />
        <MainComponent />
        <RightSideBar />
      </div>
    </div>
  )
}

export default Home