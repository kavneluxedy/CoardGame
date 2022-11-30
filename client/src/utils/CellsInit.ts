interface ICell {
	id: string,
	coords: {
		x: number,
		y: number
	},
	order: number
}

let i = 0;
const array = Array(9).fill(Array(11).fill(null));

const cells = array.map((row: ICell[], y: number) => {
	return row.map((cell: ICell, x: number) => {
		i++;
		let offsetX = x + 1;
		let offsetY = y + 1;

		return cell = {
			id: "id" + offsetX.toString(16) + offsetY.toString(16),
			coords: {
				x: offsetX,
				y: offsetY,
			},
			order: i,
		};
	});
});

export { cells, ICell };
