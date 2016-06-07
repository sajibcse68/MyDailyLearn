### Some Important commands of vagrant
```sh
# See all the vagrant box lists
$ vagrant box list

# Add a vagrant box
$ vagrant box add <box-name>  # e.g. box-name = laravel/homestead

# Initialize a vagrant box
$ vagrant init <name of vagrantbox>

# On the vagrant machine
$ vagrant up

# Login into vagrant machine
$ vagrant ssh
# Logout/exit from vagrant machine
$ exit
# Suspend/sleep the vagrant machine
$ vagrant suspend

# Shutdown the vagrant machine
$ vagrant halt

# See the status of machine
$ vagrat status

# Reload configuration file
$ vagrant reload

# Fullscreen guest window, mount etc
$ sudo apt-get install virtualbox-guest-dkms
# then restart

# Install correct version of virtualbox-guest-additions-iso inside the GUEST
$ vagrant plugin install vagrant-vbguest
```