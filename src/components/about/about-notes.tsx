'use client';
import { useState } from 'react';
import { profile } from '@/data/profile';
import { Arrow } from '@/components/ui/icon';
const notes = [
  {
    title: 'Building',
    text: profile.positioning,
    detail: 'Connecting data, intelligence and interfaces.',
    href: '#systems',
    link: 'Explore my projects',
  },
  {
    title: 'Learning',
    text: profile.degree,
    detail: `${profile.institution} · ${profile.educationPeriod}`,
    href: '#stack',
    link: 'See my toolkit',
  },
  {
    title: 'Exploring',
    text: 'Full-stack development, automation and applied AI.',
    detail: 'Learning by building the whole system.',
    href: '#ai',
    link: 'How I approach the work',
  },
];
export function AboutNotes() {
  const [selected, setSelected] = useState(0);
  const note = notes[selected];
  return (
    <div className="about-notes reveal">
      <div className="notes-tabs" role="group" aria-label="More about Akilesh">
        {notes.map((item, index) => (
          <button
            key={item.title}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span className="mono">0{index + 1}</span>
            {item.title}
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="note-content" key={selected} aria-live="polite">
        <span className="note-asterisk" aria-hidden="true">
          ✳
        </span>
        <div>
          <h3>{note.text}</h3>
          <p>{note.detail}</p>
          <a href={note.href} className="text-link">
            {note.link}
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}
