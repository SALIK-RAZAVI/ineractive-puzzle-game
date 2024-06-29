document.addEventListener('DOMContentLoaded', () => {
    const maze = document.getElementById('maze');
    let currentPos = { x: 0, y: 0 };

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        let newX = currentPos.x;
        let newY = currentPos.y;

        switch (key) {
            case 'ArrowUp':
                newY = Math.max(0, currentPos.y - 1);
                break;
            case 'ArrowDown':
                newY = Math.min(2, currentPos.y + 1);
                break;
            case 'ArrowLeft':
                newX = Math.max(0, currentPos.x - 1);
                break;
            case 'ArrowRight':
                newX = Math.min(4, currentPos.x + 1);
                break;
            default:
                return;
        }

        moveCar(newX, newY);
    });

    function moveCar(newX, newY) {
        if (newX === 2 && newY === 4) {
            alert('You reached the finish line!');
            return;
        }

        document.getElementById(`cell-${currentPos.y}-${currentPos.x}`).textContent = '';
        currentPos = { x: newX, y: newY };
        document.getElementById(`cell-${currentPos.y}-${currentPos.x}`).textContent = '🚗';
    }
});