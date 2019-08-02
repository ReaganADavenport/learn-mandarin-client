import React from 'react';
import "./Reading.css"

const GreetingReading = () => {
    return (
        <div className="Text">
            <h1>Greeting Dialogue</h1>
            <ul>
                <li>蓝明玉： 你好！</li>
                <li>魏大音： 你好！</li>
                <li>蓝明玉：请问，你贵姓？</li>
                <li>魏大音：我姓魏。 你呢？</li>
                <li>蓝明玉：我姓蓝。魏先生，你叫什么名字？</li>
                <li>魏大音：我叫大音。蓝小姐，你叫什么名字？</li>
                <li>李明玉：我叫明玉。</li>
            </ul>


            <h1>Translation</h1>
            <ul>
                <li>Lan Mingyu: Hello!</li>
                <li>Wei Dayin: Hello!</li>
                <li>Lan Mingyu: If I may ask, what is your family name?</li>
                <li>Wei Dayin: My family name is Wei. What is yours?</li>
                <li>Lan Mingyu: My family name is Lan. Mister Wei, what are you called?</li>
                <li>Wei Dayin: I am called Dayin. Miss Lan, what are you called?</li>
                <li>Lan Mingyu: I am called Mingyu.</li>
            </ul>
        </div>
    );
};

export default GreetingReading;