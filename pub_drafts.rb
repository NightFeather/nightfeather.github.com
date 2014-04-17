#!/usr/bin/env ruby
# encoding: utf-8
Dir["_drafts/*"].each do |draft|
    newName = "_posts/" + File.mtime(draft).strftime("%Y-%m-%d-") + File.basename(draft)
    puts newName
    File.open draft do |origin|
        File.open(newName,"w").write(origin.read)
    end
end
