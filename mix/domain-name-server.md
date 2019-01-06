#### What is Domain Name Server (DNS)?
- DNS allows us to access any public website hosted else where in the world through its `domain name`.
- DNS is application layer protocol, and it works completely transparent to the end user.
- As an end user, you never need to learn which website is hosted on which Server in the world, and it is not possible either
- We always access the various websites through their names (called Domain Names), Human can't remember server IP addresses


#### DNS is a Hierarchical System

- Servers higher in the hierarchy only knows how to reach directly lower ones in the Hierarchy
- Each DNS Server has a name: .google, .microsoft, .com, etc.
- The DNS at the leaves of the tree contains the record (IPs) of the Servers hosting actual website/service

#### Website's Domain Name
Explaining `www.customer.support.microsoft.com.` (the last dot (`.`) will be assigned automatically)

- `.` represent root server
- `.com` represent TLDs  (Top Level Domain)
- `.microsoft` is Microsoft's DNS Server
- `.support` is Microsoft's sub DNS Server
- `.customer` Microsoft's server which is hosting the actual website (www.services). It is not a DNS

#### What is the Fully Qualified Domain Name (FQDN)?

- FQDN = Host Name + Domain Name

#### Top Level DNS Servers Classification

- `.edu` - Educational Institution
- `.com` - Commercial Orgnization
- `.in` - India, for country specific domain, e.g. `.bd`
- `.arpa` - Used for Reverse DNS
- `.org` - for Non-Profit Organzations
- `.net` - Internet Technologies

#### First Hop DNS Servers (DNS Resolver)

- Our computer is assigned the address of First Hop DNS Server - Either statically/manually configured Or Dynamically obtained from `DHCP` servers
- Our computers always first ask `FH DNS` server to obtain the IP address of a domain name of a website we are trying to access
- If FH DNS has the ip address of the host server which host the website it returns the address to our computer, else, it query the root DNS server on our behalf for the website's IP address
- FH DNS is also called `DNS Resolver`
- FH DNS server caches the recently accessed website's ip address in its local DNS cache
- FH DNS server is shared by several users
- Our computer also have its own local DNS Cache

#### Recursive DNS Query vs Iterative DNS Query

- **Recursive DNS Query**
  - DNS Resolver takes the responsibility to get the final DNS resolution
  - DnS Resolver keep sending DNS query to subsequent DNS server based on referral answer
  - DNS client receives a definite answer: either the DNS resolution or error msg
  - Burden is on DNS resolver
- **Iterative DNS Query**
  - DNS client has to work itself to get the DNS resolution
  - DNS client keep sending DNS query to subsequent DNS server based on referral answer
  - DNS client receives a referral answer or error msg
  - Burden is on DNS client