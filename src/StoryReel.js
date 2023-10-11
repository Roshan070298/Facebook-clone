import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story image="https://img.mensxp.com/media/content/2020/Sep/header-credit-Marvel-Studios_5f741da26f175.jpeg?w=414&h=276&cc=1" proflieSrc="https://img.mensxp.com/media/content/2020/Sep/header-credit-Marvel-Studios_5f741da26f175.jpeg?w=414&h=276&cc=1" title="Iron Man" />
      <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCc4eIo50vU3QyWPnkf5KtbUYbsJoPme0V8Q&usqp=CAU" proflieSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkDU1-BQqfkauSAArTn3hKZZgjqmgXdXRmg&usqp=CAU" title="Hulk" />
      <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANkI_vvV6ecZj9Hu50_ZDYADf_iEXSvhktA&usqp=CAU" proflieSrc="https://www.global-esports.news/wp-content/uploads/2022/06/Marvels-Spider-Man.jpg" title="Spiderman" />
      <Story image="https://e0.pxfuel.com/wallpapers/660/480/desktop-wallpaper-thor-iphone-thor-ragnarok-thumbnail.jpg" proflieSrc="https://sm.ign.com/ign_in/gallery/h/how-to-wat/how-to-watch-the-thor-movies-in-chronological-order_fj7r.jpg" title="Thor" />
      <Story image="https://images.indianexpress.com/2021/06/captain-america-thor-hammer-1200.jpg" proflieSrc="https://wallpapers.com/images/hd/captain-america-android-0aqaztdwgpz41epy.jpg" title="Captain America" />
    </div>
  )
}

export default StoryReel
