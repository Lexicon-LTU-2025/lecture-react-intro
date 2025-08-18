import type { ReactElement } from 'react';

export const Instructions = (): ReactElement => {
  return (
    <article className="right-side instructions-container">
      <h3>Instruktioner</h3>
      <ol className="instructions-list">
        <li>
          Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten av en
          en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av formen.
        </li>
        <li>
          Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten
          bunke.
        </li>
        <li>
          Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända uppochner
          på bunken utan att det rör sig.
        </li>
        <li>
          Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en
          vanligt.
        </li>
        <li>Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop.</li>
        <li>
          Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta
          hastigheten.
        </li>
        <li>
          Häll sedan över det innehållet till bunken med äggvitorna. Blande ihop med en gaffel tills
          det blir en slät fluffig smet.
        </li>
        <li>Häll smeten i formen, smula över de resterande digistivetexen om du vill.</li>
        <li>Ställ in i frysen över natten.</li>
        <li>Servera och toppa med det du känner för.</li>
      </ol>
    </article>
  );
};
