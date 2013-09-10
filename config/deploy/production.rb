set :application, "Skylign"

if variables.include?(:branch)
  set :branch, :branch
else
  set :branch, "master"
end

set :repository, "git@github.com:Janelia-Farm-Xfam/LogoServer.git"  # Your clone URL

set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`
set :scm_command, "/opt/bin/git"

set :deploy_to, "/opt/www/#{application}"
set :use_sudo, false

default_run_options[:shell] = '/bin/bash'

set :deploy_via, :remote_cache

role :web, "dfam-web-prod1", :primary => true
role :web, "dfam-web-prod2"
role :app, "dfam-web-prod1", :primary => true
role :app, "dfam-web-prod2"
