import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

class Carousel extends Component {
  render() {
    const settings =  {
        adaptiveHeight: true,
        centerMode: true,
        shift: 1200,
        wheel: true
    };
    return (
      <div>
        <Slider { ...settings }>
            <div>
              <p>In 2020 December, John was preparing to take his first semester junior-year finals. But throughout his studying, he was suffering from a mild headache. Prone to ear aches, he visited the pediatrician to check whether there was any ear infection. Finding nothing, he went back to studying for next week’s exams. But the headaches got worse. John started vomiting and unable to eat any food. His parents asked whether he had to go to the ER, but he was too embarrassed to go to the hospital for something minor. It was not minor. One night, the headache was so high John could barely cope with the pain. His parents rushed him to the hospital where they took a scan of his head. A brain lesion was found pressing on the brain stem. The preliminary diagnosis was a rapid-spreading cancer, and an emergency brain surgery was necessary asap to live.</p>
            </div>
            <div>
              <p>My first brain surgery was a blur. I was mostly just trying to deal with the physical pain, while my poor family dealt with the emotional trauma. But it was over soon. After my discharge, I was met with so much love from my family and friends that I could barely contain my thankfulness. I fully recovered and we all assumed that this was a one-time rare event. My lesions disappeared and there was no diagnosis. So I went back to my usual self, feeling lucky that I had such an experience with no long-term effects. 3 months later, I started losing coordination in my left hand. I felt dizzy while walking and got small headaches again. It couldn’t be. I work hard to keep my body healthy. There is no way that my body is this pathetic. They took another out-patient MRI of my brain, and then detained me and rushed me to the ICU. I had 3 more strokes in my brain.</p>
            </div>
            <div>
              <p>The first week John spent in the ICU was the toughest physically. He was not allowed to leave his bed without nurse help and supervision. He vomited all his food. One time, he was forced to lay flat on his back after a lumbar exam and vomited in his mouth. He ended up getting pneumonia from that. His arms were swollen from all the IVs that were stuck in them. Nevertheless, the nurses went above and beyond in their care for John.</p>
            </div>
            <div>
              <p>Everything that happens once can never happen again. But everything that happens twice will surely happen a third time. That first week in the ICU was easily the toughest week I ever had. For the very first time, I felt truly alone. I lost all assurances I had in my life -- my future job, playing games with my kids, riding a motorcycle, hanging out with my friends. I lived and was driven by these things I thought were certain. But they weren’t. So what exactly was I supposed to be living for? I remember complaining to close family and friends, hoping any of them would give me a small morsel of hope to hang on to. On top of that, it felt like every inch of my body was getting violated.</p>
            </div>
            <div>
              <p>John was in the hospital for 3 weeks total. He slowly started to get better in week 2. All the tests the doctors ran came back negative. This was a good thing, but as one doctor mentioned, that meant John’s brain was still a ticking time bomb that could go off at any time. So the very last and ultimate test was a brain biopsy -- a surgery on a portion of the brain that has caused some bleeding. The surgery was performed by one of the best neurosurgery teams in the country (at least I think so :) ).</p>
            </div>
            <div>
              <p>I remember the night before my surgery very vividly. Was it weird that I was more nervous for this one than the last one? Last time I needed surgery just to live and get rid of that headache. But this time, the surgery was optional and could end up not helping at all. I was all alone thinking about these things when I saw a text from a close friend. It was a video of all my friends (some of whom didn’t even know about the full situation) encouraging me. That may have been the very highest point in my life. I thought of each of my friends and family, and felt they were going through this situation right with me. And my ultimate friend, my God, was right there holding my hand.</p>
            </div>
            <div>
              <p>So here I am now, after two brain surgeries and no answers as of yet. I won’t pretend that my experience was among the worst human experiences. Right across from my hospital room were epilepsy patients that were bedridden and provoked to induce and study epilepsy. One of my friends in Myanmar is living in chaos, not knowing where his family’s next meal will come from and even whether they will all be alive by the end of the day. I also won’t pretend that now I have all the answers to life and happiness. But with all these increasing uncertainties, I have reinforced some foundational certainties. If God wanted me dead, I would have been dead. But if God wants me to live, then I must live. There is a point and a plan to the rest of my life, no matter however short that may be. Secondly, everyone comes into this world naked. But we leave with at least two things. The investments God makes in us and the investments we make in others. Those two things are eternal. So as long as I’m alive, I hope to live for these two things.</p>
            </div>
            <div>
              <p>The map below shows good things people are doing for their fellow brothers and sisters, which I believe are for eternity. Please. Live your life slowly, and live it surely.</p>
            </div>
        </Slider>
       </div>
    );
  }
}

export default Carousel;