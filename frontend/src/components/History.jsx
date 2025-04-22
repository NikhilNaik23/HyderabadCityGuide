import React from "react";
import Historical from "./cards/Historical";

// Import images
import img1591 from '../assets/1591.png';
import img1687 from '../assets/1687.png';
import img1688 from '../assets/1688.png';
import img1724 from '../assets/1724.png';
import img1984 from '../assets/1984.png';

const History = () => {
  const desc = [
    {
      content: `
    Hyderabad was founded in 1591 CE by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, to address the growing water scarcity and overcrowding in the old capital, Golconda. Strategically built on the banks of the Musi River, the new city was named after Hyder Mahal, his beloved, symbolizing both personal affection and royal grandeur.
    Designed with advanced urban planning, Hyderabad featured wide streets, public spaces, and a central landmark (the Charminar) around which the city was organized. It blended Persian and Deccan architecture, and from the start, it was envisioned as a cosmopolitan center for trade, culture, and poetry. Muhammad Quli's vision laid the foundation for Hyderabad's unique identity, which continues to influence the city today.
  `,
      title: "Foundation (1591 CE)",
      src: img1591,
      textClassName: "text-lg leading-relaxed mt-6",
    },
    {
      content: `
    During Ibrahim Quli Qutb Shah's reign, Golconda became overcrowded, prompting the need for a new city. In 1591, Muhammad Quli Qutb Shah founded Hyderabad on the southern bank of the River Musi. He prayed for its prosperity, saying, "Make my city full of people, like you keep the river full of fish." Folklore says he chose the land after a hunt, though he likely knew the area's potential. The city was designed in a grid pattern with Charminar at its center, surrounded by key buildings like Dar-ul-Shifa, Mecca Masjid, and Badshahi Ashurkhana. He also developed many gardens across the city.
  `,
      title: "Qutb Shahi Dynasty (1591-1687)",
      src: img1687,
      textClassName: "text-lg leading-relaxed mt-6",
    },
    {
      content: `
    During Shah Jahan’s reign, the Mughals secured the Deccan, subduing Ahmadnagar by 1633 and making Bijapur and Golconda tributary states by 1636. Aurangzeb, then a prince, urged full annexation and besieged Golconda in 1656, but Shah Jahan opted for peace. Golconda’s ruler, Abdullah Qutb Shah, strengthened its defenses, building what is now Naya Qila. His successor, Abul Hasan Qutb Shah, ruled from 1672. In 1682, Emperor Aurangzeb moved south, eventually annexing Bijapur in 1686. Golconda’s wealth and strategic value drove Aurangzeb’s ambition. Religious and political tensions further fueled Mughal motives.
  `,
      title: "Mughal Annexation (1687)",
      src: img1688,
      textClassName: "text-lg leading-relaxed mt-6",
    },
    {
      content: `
    The Asaf Jahi dynasty was founded by Chin Qilich Khan (Asaf Jah I), who ruled the Deccan semi-independently after Aurangzeb's death. In 1724, he broke from weakening Mughal control. The Nizams clashed with the Marathas from the 1720s, eventually paying them tribute. After defeat at Kharda, the Nizam accepted British suzerainty and later supported them. The Nizams remained rulers of Hyderabad State under British rule until India annexed it in 1948. Though seven Nizams are officially recognized, three others briefly ruled during a 13-year instability. The last Nizam, Mir Osman Ali Khan, lost power in 1948. His descendant, Azmet Jah, holds the title today.
  `,
      title: "Asaf Jahi Dynasty / Nizams (1724-1948)",
      src: img1724,
      textClassName: "text-lg leading-relaxed mt-6",
    },
    {
      content: `
    Operation Polo, launched in September 1948, was a military operation that led to the annexation of the princely state of Hyderabad by India. At independence in 1947, Hyderabad’s Nizam, Mir Osman Ali Khan, sought to remain independent, ruling over a largely Hindu population with a Muslim elite. A standstill agreement with India was signed, but tensions rose due to the Nizam’s inability to suppress the Telangana rebellion and the violent Razakar militia. After failed negotiations and increasing unrest, India invaded on 13 September. By 17 September, Hyderabad surrendered. The annexation triggered widespread communal violence. The Nizam later signed the Instrument of Accession and became Raj Pramukh in 1950.
  `,
      title: "Merger with India (1948)",
      src: img1984,
      textClassName: "text-lg leading-relaxed mt-6 ",
    },
  ];

  return (
    <div className="text-white bg-[#DFA16E] bg-[linear-gradient(138deg,_rgba(223,_161,_110,_1)_0%,_rgba(97,_50,_22,_1)_52%,_rgba(0,_0,_0,_1)_100%)] px-8 py-12 min-h-screen flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8 sticky top-15">
        Historical Background
      </h1>

      {/* Content Section */}
      <div>
        {desc.map((data, idx) => (
          <Historical
            key={idx}
            className="sticky"
            title={data.title}
            cn={idx === 0 ? "mt-0" : "mt-6 "}
            textClassName={data.textClassName}
            content={data.content}
            image={data.src}
            imageClassName="w-64 mt-10 object-contain rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default History;
