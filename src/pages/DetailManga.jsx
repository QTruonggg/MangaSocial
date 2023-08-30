import Navbar from "../components/common/Navbar";
import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import union from '../img/Union.png'
import mess from '../img/Message.png'


function DetailManga() {
  const location = useLocation()
  const { poster, title, authorHome, urlManga, homenelo } = location.state || {};

  console.log('searchResultsObj', poster, title, authorHome, urlManga)
  console.log('homenelo', homenelo)

  // const navigate = useNavigate()
  const handleReadNow = (link) => {
    console.log('link', link)
  }
  return (
    <div className="">
      <Navbar />
      <div className="w-full">
        <div className="relative flex flex-col justify-center">
          <div className="w-full">
            <img src={poster} alt="" className="w-full object-cover" />
          </div>
          <div className="absolute translate-y-1/2 flex flex-col bg-white rounded-tl-[30px] rounded-tr-[30px] w-full px-[30px] text-base">
            <div className="flex justify-between mt-[30px] ">
              <div>
                <p>Action</p>
              </div>
              <div className="flex">
                <div>
                  <p>2.6K</p>
                </div>
                <div>
                  <p>2.4K</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-5">
              <h2>Naruto</h2>
              <p>icon trai tym</p>
            </div>
            <div className="flex gap-2">
              <p>396 Pages</p>
              <p>by Kishimoto Masashi</p>
            </div>
            <div className="relative mt-5">
              <p className="overflow-y-scroll h-64">Naruto is a manga series from Japan. It's about the story of a young ninja who wants to become the strongest leader in his village. The series were produced by Masashi Kishimoto and in 1997 were published. Later this manga was adapted into a TV anime. This studio also has developed 10 movies as well as a number of video animations. You can read Naruto manga online, which until today has sold over 220 copies around the world (except from Japan in 35 more countries), making it the 3rd best selling series of manga in history. When he was a child, Naruto was isolated from its community. The people in the village treated him as he was Nine-Tails itself and don't want him. None in the village had the right to mention the Nine-Tails, in order to prevent Naruto from finding the truth. But 12 years later, he finds out the truth from ninja Mizuki, who told him. Some time later, Naruto becomes a ninja and usually competes against other teams, and they form a three-person team by the name Team 7. Like all the other similar teams in every village, the Team 7 has to complete missions that are requested by the villagers, ranging from being bodyguards or doing chores. After participating in a number of missions, the Team 7 is allowed to take place in an exam, in order to move up in hierarchy and be able to be involved in more difficult missions. After 2,5 years, Naruto returns from training and he continued with his team to fight the Akatsuki members.When Kishimoto first made the plot of the story, thought that it was a mess. For example, he thought that the chakras, along with other hand signs made Naruto look like a lot of Japanese them, but he believed that it could be enjoyable for reading. In these particular series, he actually tried to make his characters to look like unique ones. Above all he based his main theme on the Japanese culture and he separated the characters in the series into different teams, in order to give to each team a special flavor. He wanted to make each member to look like an 'extreme' character and when he was creating them, Kishimoto followed the 5 steps, like drafting, sketching, colouring, inking and shading. Moreover, when he started creating the series, Kishimoto paid attention to the designs of the village and the settings. For instance, the village was created spontaneously, but he took the idea for the scenery from his home in Okayama, in Japan.The Naruto Anime made its debut in Japan TV Tokyo in October 2002 and was concluded in 2007 after 220 episodes. In addition, these series led also led to the production of 10 films. The first one under the title 'Ninja clash in the land of Snow' was first released in August 2004 in Japan and told the story fo how Team 7 was sent to the Land of Snow, in order to protect the actors from shootings of he new Princess Fun movie.The soundtracks of '' were composed by T. Masuda. The first under the title 'Naruto Manga Original Soundtrack' was released in April 2003 and had 22 tracks. In addition, the video games of Naruto, which are mostly fighting games, were seen in various consoles from Sony, Microsoft and NintendoOther attractive Mangav</p>
              <div className="absolute top-32 grid grid-cols-5 w-full">
                <div className="col-span-1 w-[60px] h-[60px] bg-[#FFF0E0] flex items-center justify-center rounded-full drop-shadow-2xl cursor-pointer" >
                  <img src={union} alt="" className="w-[20px] h-[25px]"/>
                </div>
                <button
                  className="bg-[#F48611] col-span-3 rounded-[68px] h-[60px] w-[200px] drop-shadow-2xl cursor-pointer"
                  onClick={() => handleReadNow(homenelo.chapter_home[0].link)}>Read now</button>
                <div className="w-[60px] h-[60px] bg-[#FFF0E0] flex items-center justify-center rounded-full justify-self-end drop-shadow-2xl cursor-pointer">
                  <img src={mess} alt="" className="w-[25px] h-[25px]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailManga;