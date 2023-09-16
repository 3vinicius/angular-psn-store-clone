export interface GamesServices {
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

export interface Game {
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
}

export interface DataGame{
	id:string,
		name:string,
		background_image:string,
		plataforms: string,
		ratings:[]
}
