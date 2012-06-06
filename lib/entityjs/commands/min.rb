module Entityjs
  
  class Min
    
    def self.generate(args=nil)

    	if !Dirc.game?
    		return 2
    	end

    	Config.instance.reload

      final_name = Config.instance.build_name+'.js'
      path = Config.instance.min_path

      puts "Compiling code"

      out = Build.compile_game

      puts "Minifying"

      out = Build.minify(out)

      puts "Writing to #{path}"

      File.open(path, 'w') do |f|
      	f.write(out)
      end

      puts "Done"

    end

  end

end