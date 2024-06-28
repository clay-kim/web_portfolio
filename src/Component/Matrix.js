import React, { useEffect, useState } from 'react';
import './Matrix.css';

const generateRandomLetters = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=';
    const korean = '귀아아되는두넹헙어며여옵허사도악오믄틸은좆때은에까후후세핡는항마들돈삵러몰처에독브아억의엥다아닁헴호기다흤흤춤이나옹맨간낭뉴쯔익이야탕후류옥처는돵즈에간뷴칀으로자디아힌뇌스가촤민셈린근개에서은워아우가라이두히애고허토롰빈악을두싱미민자새조냐규몐으독소잔의';
    const japanese = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんゃゅょっアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンャュョッ';

    let result = '';
    for (let i = 0; i < length; i++) {
        const category = Math.random();
        if (category < 0.8) { // 70% chance for regular characters
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        } else { // 30% chance for Korean or Japanese characters
            const subCategory = Math.random();
            if (subCategory < 0.5) {
                result += korean.charAt(Math.floor(Math.random() * korean.length));
            } else {
                result += japanese.charAt(Math.floor(Math.random() * japanese.length));
            }
        }
    }
    return result;
};

const Matrix = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const generateLines = () => {
            const newLines = [];
            const lineCount = 60;

            for (let i = 0; i < lineCount; i++) {
                const length = Math.floor(Math.random() * 40) + 9; // Random length between 9 and 99 characters
                const letters = generateRandomLetters(length);
                const delay = Math.random() * 5; // Random delay between 0 and 5 seconds
                const duration = Math.random() * 5 + 15; // Random duration between 10 and 15 seconds
                newLines.push({ letters, delay, duration });
            }

            setLines(newLines);
        };

        generateLines();
    }, []);

    return (
        <div className="matrix">
            {lines.map((line, index) => (
                <div
                    key={index}
                    className="line"
                    style={{
                        animationDelay: `${line.delay}s`,
                        animationDuration: `${line.duration}s`,
                        left: `${(index / lines.length) * 100}%`,
                    }}
                >
                    {line.letters.split('').map((char, idx) => (
                        <div
                            key={idx}
                            className="letter"
                            style={{
                                animationDelay: `-${Math.random() * 2}s`, // Random negative delay for slower blinking
                                animationDuration: `${Math.random() * 4 + 1}s`, // Random duration between 1 and 5 seconds
                            }}
                        >
                            {char}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Matrix;
