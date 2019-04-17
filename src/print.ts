export default function printMe(text: string) {
  document.getElementById('results').innerText += `${text}\n`;
}