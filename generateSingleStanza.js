function generateSingleStanza(number) {
  for (let i = number; i > 0; i--) {
    if (i % 10 === 1 && i > 20) {
      console.log(`${i} бутылка пива на стене
          ${i} бутылка пива!
          Возьми одну, пусти по кругу
          ${i - 1} бутылок пива на стене!`);
    }
    if ((i % 10 === 2 && i > 20) || i === 2) {
      console.log(`${i} бутылки пива на стене
            ${i} бутылки пива!
            Возьми одну, пусти по кругу
           ${i - 1} бутылка пива на стене!`);
    }
    if (
      (i % 10 === 3 && i > 20) ||
      (i % 10 === 4 && i > 20) ||
      (i < 5 && i > 2)
    ) {
      console.log(`${i} бутылки пива на стене
          ${i} бутылки пива!
          Возьми одну, пусти по кругу
         ${i - 1} бутылки пива на стене!`);
    }
    if (i % 10 === 5 && i > 20) {
      console.log(`${i} бутылок пива на стене
            ${i} бутылок пива!
            Возьми одну, пусти по кругу
           ${i - 1} бутылки пива на стене!`);
    }
    if (i === 1) {
      console.log(`${i} бутылка пива на стене
          ${i} бутылка пива!
          Возьми одну, пусти по кругу
          нет бутылок пива на стене!`);
    }
    if (
      (i > 4 && i < 21) ||
      (i % 10 === 6 && i > 21) ||
      (i % 10 === 7 && i > 21) ||
      (i % 10 === 8 && i > 21) ||
      (i % 10 === 9 && i > 21) ||
      (i % 10 === 0 && i > 21)
    ) {
      console.log(`${i} бутылок пива на стене
          ${i} бутылок пива!
          Возьми одну, пусти по кругу
         ${i - 1} бутылок пива на стене!`);
    }
  }
}
generateSingleStanza(99);
