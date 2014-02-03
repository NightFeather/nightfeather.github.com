#!/usr/bin/env ruby
# encoding: utf-8
Dir.glob("_drafts/*") do |draft|
    puts File.mtime(draft).strftime("%Y-%m-%d-") + File.basename(draft)
    File.rename( draft , "_posts/" + ( File.mtime(draft).strftime("%Y-%m-%d-") + File.basename( draft ) ) )
end
