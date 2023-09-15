export interface Game {
	results: [{
		id:string,
		name:string,
		background_image:string,
		parent_platforms: [{
			platform: {name:string}
		}],
		ratings:[{
			count:string,
			percent:string,
		}]
	}]
}
