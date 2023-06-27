


const scriptsInEvents = {

	async Egame_Event1_Act1(runtime, localVars)
	{
		screen = 3;
		
	},

	async Egame_Event1_Act2(runtime, localVars)
	{
		localStorage.setItem('screen', '3');
	},

	async Egame_Event4_Act2(runtime, localVars)
	{
		localStorage.setItem('color', runtime.globalVars.HEXcolor);
	},

	async Egame_Event6_Act2(runtime, localVars)
	{
		screen = 3;
		
	},

	async Egame_Event6_Act3(runtime, localVars)
	{
		localStorage.setItem('screen', '3');
	},

	async Egame_Event20_Act1(runtime, localVars)
	{
		runtime.globalVars.per = localStorage.getItem('screenshot');
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

