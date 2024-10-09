function checkPalindrome() {
            
    const input = document.getElementById('text-input').value;
    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanInput.split('').reverse().join('');
    const isPalindrome = cleanInput === reversed;
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${input} ${isPalindrome ? 'is' : 'is not'} a palindrome.`;
    if (input === '') {
    alert('Please input a value');
    return;}
}