/*
The sound component utilizes the new HTML5 to play sound effects in the web browser.
It is reccommended to load two sound codecs OGG and AAC because not every browser supports
all sound codecs at this time.

//load a sound
re.load('run.ogg run.aac');
//BAD this will load both sounds. Even if the browser doesn't support one

//GOOD. load just one codec of the sound
var codec;
if(re.support('ogg')){
    codec = 'ogg';
} else if(re.support('aac')){
    codec = 'aac';
}

re.load('run.'+codec');

//create sound
re.e('sound run.'+codec);

//that is a pain, so a helper method has been created
re('sound run.'+re.support('ogg', 'aac'));

Its recomended to save the supported codec somewhere
//like so...
re.codec = re.support('ogg', 'aac');

re.load('run.'+re.codec);

re.e('run.'+re.codec);

WARNING: Because the sound component has generic
method names stop, play, watchout for overwrites.

Sound Tip
//find all sounds in game and play them!
re('sound').method('play');

*note: A sound only only has one channel and cannot be played multiple times at once.
This will be fixed with the channel component.

*/
re.sound = re.c('sound')
.statics({
    
    enabled:true
    
})
.namespaces({
    
    hasEvent:false,
    loops:0
    
})
.defines({

    play:function(loop){
        if(!this._sound || !re.sound.enabled) return this;
        
        var c = this._sound;
        var that = this;
        
        c.currentTime = 0;
    
        c.play();
        
          this.sound_loops = 0;
          
          if(!this.sound_hasEvent){
              this.sound_hasEvent = true;
              
              c.addEventListener('ended', function(){
                
                  that.trigger('sound:complete', that.sound_loops, loop);
                  
                  if(loop == -1 || that.sound_loops < loop){
                      c.currentTime = 0;
                      that.sound_loops++;
                  }
                  
              }, false);
            
        }
        
        return this;
    },
    
    resume:function(){
        this._sound.play();
        return this;
    },
    
    pause:function(){
        this._sound.pause();
        
        return this;
    },
    
    currentTime:function(){
        return this._sound.currentTime;
    },
    
    ended:function(){
        return this._sound.ended;
    }
    
});