#### IPv4 Address `Class A`

- First bit of the first Octet must be zero (0)
  - Range: 0 0000000 -> 0 1111111 (0 -> 127)
  - We can't have first octet of an IP address 0 so, it should start from 1
  - Any IP that start with `127` is loopback IP address, so, it should be 126
  - So, Range should be : 00000001 -> 01111110 (1 -> 126)
  - Default Subnet Mask: `255.0.0.0` (Prefix length: 8). Total IP: 2^(32-8) - 2

#### IPv4 Address `Class B`

- First 2 bits must be `10`
  - Range: 10 000000 -> 10 111111 (128 -> 191)
  - Default Submet Mask: `255.255.0.0` (prefix length: 16). Total IPs: 2^(32-16) - 2 = 65,534

#### IPv4 Address `Class C`

- First 3 bits of the IP address must be `110`
  - Range: 110 00000 -> 110 11111 (`192 -> 223`). e.g. 192.168.0.1
  - Default Subnet mask: 255.255.255.0 (prefix length: 24). Total 2^(32-24) - 2 = 254 IPs

#### IPv4 Address `Class D`

- First 4 bits of IP address must be `1110`
  - Range: 1110 0000 -> 1110 1111 (224 -> 239). e.g. 227.0.0.1
  - Use for Multicast Transmission
  - Multicast IP address don't have Network ID or Host ID or, Subnet mask or, Prefix

#### IPv4 Address `Class E`

- First 4 bits of IP address must be `1111`
  - Range: 1111 0000 -> 1111 1111 (224 -> 255). e.g. 250.9.6.1
  - Class `E` never use by the Public. Reserve for Research & Development by the Internet Authority
  - IPs 240.0.0.0 -> 255.255.255.255. But `255.255.255.255` is Broadcast IP. so, 240.0.0.0 -> 255.255.255.254