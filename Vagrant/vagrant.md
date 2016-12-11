### Some Important commands of vagrant
```sh
                       
$ vagrant box list                            # See all the vagrant box lists

$ vagrant box add <box-name>                  # Add a vagrant box, e.g. box-name = laravel/homestead

$ vagrant init <name of vagrantbox>           # Initialize a vagrant box 

$ vagrant up                                  # Start/On the vagrant machine

$ vagrant ssh                                 # Login into vagrant machine  

$ exit                                        # Logout/exit from vagrant machine

$ vagrant suspend                             # Suspend/sleep the vagrant machine

$ vagrant halt                                # Shutdown the vagrant machine

$ vagrat status                               # See the status of machine  

$ vagrant reload                              # Reload configuration file
 
# Fullscreen guest window, mount etc
$ sudo apt-get install virtualbox-guest-dkms
# then restart

# Install correct version of virtualbox-guest-additions-iso inside the GUEST
$ vagrant plugin install vagrant-vbguest
```