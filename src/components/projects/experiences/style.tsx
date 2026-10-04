'use client';
import { useState } from 'react';
import { DemoNote } from './activity';
const colors = [
  { name: 'Cobalt', value: '#4266ba' },
  { name: 'Terracotta', value: '#aa6350' },
  { name: 'Sage', value: '#71806a' },
];
export default function Style() {
  const [top, setTop] = useState('Shirt');
  const [bottom, setBottom] = useState('Trousers');
  const [shoes, setShoes] = useState('Sneakers');
  const [color, setColor] = useState(0);
  return (
    <>
      <div className="demo-heading">
        <strong>Make it your combination.</strong>
        <span>CONCEPT PREVIEW</span>
      </div>
      <div className="outfit-composer">
        <div className="outfit-canvas">
          <span>OUTFIT CANVAS</span>
          <svg
            viewBox="0 0 160 300"
            role="img"
            aria-label={`${colors[color].name} ${top.toLowerCase()}, ${bottom.toLowerCase()} and ${shoes.toLowerCase()} outfit illustration`}
          >
            <ellipse cx="80" cy="283" rx="60" ry="9" fill="currentColor" opacity=".07" />
            <circle cx="80" cy="32" r="18" fill="#c6b19b" />
            <path d="M70 45v21h20V45" fill="#c6b19b" />
            <path
              d={
                top === 'Shirt'
                  ? 'M68 59 41 70 24 125l22 8 13-35v69h42V98l13 35 22-8-17-55-27-11-12 12Z'
                  : 'M68 59 40 71 29 161l22 3 8-66v69h42V98l8 66 22-3-11-90-28-12-12 12Z'
              }
              fill={colors[color].value}
            />
            <path
              d="M80 75v82m-14-60h10"
              fill="none"
              stroke="#fff"
              strokeOpacity=".35"
              strokeWidth="1.5"
            />
            <path
              d={
                bottom === 'Trousers'
                  ? 'M59 167h42l6 104H84l-4-69-4 69H53Z'
                  : 'M59 167h42l5 58H84l-4-30-4 30H54Z'
              }
              fill="#484a4e"
            />
            {bottom === 'Shorts' && <path d="M56 225h19v45H56m29-45h19v45H85" fill="#c6b19b" />}
            <path
              d="M54 265h23v16H43q-2-8 11-16Zm30 0h21q14 8 12 16H84Z"
              fill={shoes === 'Sneakers' ? '#e8e2d6' : '#58483d'}
              stroke="#97928a"
              strokeWidth="1"
            />
            {shoes === 'Sneakers' && <path d="M43 277h33m8 0h33" stroke="#888" strokeWidth="2" />}
          </svg>
        </div>
        <div className="wardrobe-controls">
          {[
            { name: 'Top', items: ['Shirt', 'Jacket'], value: top, set: setTop },
            { name: 'Bottom', items: ['Trousers', 'Shorts'], value: bottom, set: setBottom },
            { name: 'Footwear', items: ['Sneakers', 'Loafers'], value: shoes, set: setShoes },
          ].map((group) => (
            <div key={group.name} role="group" aria-label={`Choose ${group.name.toLowerCase()}`}>
              <span>{group.name}</span>
              {group.items.map((item) => (
                <button
                  key={item}
                  aria-pressed={group.value === item}
                  onClick={() => group.set(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
          <div className="outfit-colors" role="group" aria-label="Choose outfit color">
            <span>Color</span>
            {colors.map((item, i) => (
              <button
                key={item.name}
                aria-label={item.name}
                aria-pressed={color === i}
                onClick={() => setColor(i)}
                style={{ backgroundColor: item.value }}
              >
                {color === i ? '✓' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="outfit-recommendation" role="status">
        <span>YOUR COMBINATION</span>
        <strong>
          {top === 'Jacket' && shoes === 'Loafers'
            ? 'A composed, smart-casual direction.'
            : bottom === 'Shorts'
              ? 'An easy, casual direction.'
              : 'A versatile everyday direction.'}
        </strong>
        <p>
          {colors[color].name} {top.toLowerCase()} + {bottom.toLowerCase()} + {shoes.toLowerCase()}
        </p>
      </div>
      <DemoNote>Local, hand-authored outfit suggestions; no trained recommendation model.</DemoNote>
    </>
  );
}
