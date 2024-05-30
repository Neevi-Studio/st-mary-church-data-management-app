import { ConfirmFamilyDTO, GetPendingUsers, LoginDto, UpdateFamilyDto, UpdatePendingFamilyData, UpdatePendingUserDto, UpdateSemiConfirmedFamilyData, UpdateSemiConfirmedUser, UpdateUserDto, User } from "@/Api";

export async function apiLoginUser(credentials: LoginDto) {
  try {
    const response = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    if (!response.ok) {
      throw new Error('Not registered or Invalid Credentials');
    }
    return response;
  } catch (error) {
    throw error;
  }
}

export async function apiLogoutUser() {
  try {
    const response = await fetch(`/api/auth/logout`, {
      method: 'GET'
    });
    window.location.reload();
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetFamilies() {
  try {
    const response = await fetch(`/api/families`, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetConfirmedFamilies() {
  try {
    const response = await fetch(`/api/families/confirmed`, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetSingleConfirmedFamily(familyId: string) {
  try {
    const response = await fetch(`/api/families/confirmed`, {
      method: 'POST',
      body: JSON.stringify(familyId),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiUpdateFamily(familyId: string, body: UpdateFamilyDto) {
  try {
    const response = await fetch(`/api/singleFamily`, {
      method: 'PATCH',
      body: JSON.stringify({ id: familyId, body: body }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiUpdateUser(userId: string, body: UpdateUserDto) {
  try {
    const response = await fetch(`/api/PatchSingleUser`, {
      method: 'PATCH',
      body: JSON.stringify({ id: userId, body: body }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiUpdateSemiConfirmedFamily(familyId: string, body: UpdateUserDto) {
  try {
    const response = await fetch(`/api/semi-confirmed`, {
      method: 'PATCH',
      body: JSON.stringify({ id: familyId, body: body }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetSemiConfirmedFamilies() {
  try {
    const response = await fetch(`/api/families/semiconfirmed`, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiSemiConfirmFamily(body: ConfirmFamilyDTO) {
  try {
    const response = await fetch(`/api/families/semi-confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetMatchingFamilyUsers(body: GetPendingUsers) {
  try {
    const response = await fetch(`/api/families/matching`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiEditPendingFamilyMember(familyId: string, studentId: number, body: UpdatePendingUserDto) {
  try {
    const response = await fetch(`/api/families/edit-pending`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familyId, studentId, body })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiEditPendingFamilyAddress(familyId: string, body: UpdatePendingFamilyData) {
  try {
    const response = await fetch(`/api/families/edit-pending`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familyId, body })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiEditFamilyMember(familyId: string, studentId: number, body: UpdateSemiConfirmedUser) {
  try {
    const response = await fetch(`/api/families/edit-semiconfirmed`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familyId, studentId, body })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiEditFamilyAddressAndLastName(familyId: string, body: UpdateSemiConfirmedFamilyData) {
  try {
    const response = await fetch(`/api/families/edit-semiconfirmed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familyId, body })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiConfirmFamily(familyId: string, body: ConfirmFamilyDTO) {
  const bodyy = {
    familyId,
    body
  }
  try {
    const response = await fetch(`/api/families/confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyy)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetMyProfile() {
  try {
    const response = await fetch(`/api/mine`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apisearchUsers(searchTerm: string) {
  try {
    const response = await fetch(`/api/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchTerm)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetDuplicates() {
  try {
    const response = await fetch(`/api/getDuplicates`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiUserDuplicates(userId: string) {
  try {
    const response = await fetch(`/api/userDuplicates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiDeleteUser(userId: string) {
  try {
    const response = await fetch(`/api/deleteUser`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetSingleUser(userId: string) {
  try {
    const response = await fetch(`/api/getSingleUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}
// export async function apiLogoutUser() {
//   try {
//     const response = await fetch(`/api/auth/logout`, {
//       method: 'GET'
//     });
//     window.location.reload();
//     return response;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }

// export async function apiLogoutUser() {
//   try {
//     const response = await fetch(`/api/auth/logout`, {
//       method: 'GET'
//     });
//     window.location.reload();
//     return response;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }
